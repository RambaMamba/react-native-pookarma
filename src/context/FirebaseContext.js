import React, {createContext} from 'react';
import * as firebase from 'firebase';


import "firebase/auth"
import "firebase/firestore"
import config from '../config/firebase'

const FirebaseContext = createContext()

if(!firebase.apps.length){

    firebase.initializeApp(config);
}

const db = firebase.firestore();


const Firebase = {

    getCurrentUser: () => {

        return firebase.auth().currentUser;
    },


    createUser: async (user) => {

        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            const uid = Firebase.getCurrentUser().uid;

            let profilePhotoUrl = "default";
            await db.collection("users").doc(uid).set({
                username: user.username,
                email: user.email,
                profilePhotoUrl,
            })

            if(user.profilePhoto){
                profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);

            }
            delete user.password;
            return {...user, profilePhotoUrl, uid }

        } catch (error){
            console.log("Error @createdUser: ", error.message)
        }


    },

    uploadProfilePhoto: async (uri) => {
        const uid = Firebase.getCurrentUser().uid;
        console.log("image");

        try{
            console.log("1");

            const photo = await Firebase.getBlob(uri);
            console.log("2");

            const imageRef = firebase.storage().ref("profilePhotos").child(uid);
            console.log("3");

            await imageRef.put(photo);
            console.log("4");

            console.log("5");

            const url = await imageRef.getDownloadURL();

            await db.collection("users").doc(uid).update({

                profilePhotoUrl:url,
            });
            console.log("6");

            console.log("image");
            return url;
        }catch(error){
            console.log("Error @UploadProfilePhoto ", error)
        }

    },

    getBlob: async (uri) => {
        console.log("BLOB1");
        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            console.log("BLOB2");

            xhr.onload = () => {
                resolve(xhr.response)
            }
            xhr.onerror = () =>{
                reject(new TypeError("Network request failed."))
            }
            console.log("BLOB3");

            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
            console.log("BLOB4");

        })
    }


};

const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
};

export {FirebaseContext, FirebaseProvider};