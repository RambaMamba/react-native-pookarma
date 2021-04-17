import React, {useState} from "react";
import styled from "styled-components";
import Text from '../componenets/Text';
import {AntDesign} from '@expo/vector-icons'
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {Platform} from 'react-native';

export default SignUpScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[loading, setLoading] = useState(false);
    const[profilePhoto, setProfilePhoto] = useState();

    const getPermission = async() =>{

        if(Platform.OS !== 'web'){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            return status;
        }
    };


    const pickImage = async () => {

        try{
            let results = await ImagePicker.launchImageLibraryAsync({

                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: .5

            })

            if(!results.cancelled){
                setProfilePhoto(results.uri);
            }
        }
        catch(error){
            console.log("Error @pickimage: ", error);
        }

    };

    const AddProfilePhoto = async() => {
        console.log("ASDADA");
        const status = await getPermission()

        if(status !== "granted"){
            alert("Please accept permissions to access camera role in settings");
            return;
        }

        pickImage();

    };

    return (

        <Container>
            <Main>
                <Text title semi center>Join Today</Text>
            </Main>

            <ProfilePhotoContainer onPress={AddProfilePhoto}>
                <DefaultProfilePhoto>
                    <AntDesign name="plus" size={24} color = "ffffff"/>
                </DefaultProfilePhoto>

            </ProfilePhotoContainer>

            <Auth>

                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField autoCapitalize="none" 
                    autoCorrect={false} 
                    autoFocus = {true}
                    onChangeText={username => setUsername(username.trim())}
                    value = {username}
                    />
                </AuthContainer>


                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    keyboardType = "email-address"
                    onChangeText={email => setEmail(email.trim())}
                    value = {email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password.trim())}
                    value = {password}
                    />
                </AuthContainer>

            </Auth>

            <SignUpContainer disabled={loading}>
                {loading ? (
                    <Loading />
                ):(
                    <Text bold center color="#ffffff">Sign Up</Text>
                )}
                    
            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate("SignIn")}>
                <Text small center>
                    Already have an account?{" "}
                    <Text color="#964B00" bold>
                        Sign In
                    </Text>
                </Text>
            </SignIn>

            <StatusBar barStyle="light-content"/>
        </Container>

    );


};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 40px;

`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
    margin-top: -20px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`

    border-bottom-color : #8e93a1;
    border-bottom-width : 0.5px;
    height : 48px;

`;

const SignUpContainer = styled.TouchableOpacity`

    margin: -20px 32px 15px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #964B00;
    border-radius: 6px;

`;

const SignIn = styled.TouchableOpacity`

    margin-top: 20px;


`;

const ProfilePhotoContainer = styled.View`
    background-color: #964B00;
    width: 80px;
    height: 80px;
    border-radius: 540px;
    align-self: center;
    margin-top: 40px;
`;

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex:1;
`;


const Loading = styled.ActivityIndicator.attrs(props => ({ 

    color: "#FFFFFF",
    size: "small"

 }))``; 

const StatusBar = styled.StatusBar``;