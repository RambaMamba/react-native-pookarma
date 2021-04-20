import React, {useState} from 'react';
import styled from 'styled-components'
import Text from '../componenets/Text';
import {useContext} from 'react';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {AntDesign} from '@expo/vector-icons';
import {ScrollView} from 'react-native';

export default PostScreen = () => {

    const[Photo, SetPhoto] = useState();
    const [post, setPost] = useState();


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
                quality: 1,

            })

            if(!results.cancelled){
                SetPhoto(results.uri);
            }
        }
        catch(error){
            console.log("Error @pickimage: ", error);
        }

    };

    const AddPhoto = async() => {
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
                <Text title semi center> Post your pets.</Text>

                <ImagesContainer onPress={AddPhoto}>
                    {Photo ? (
                        
                        <Picture  source={{uri: Photo}} />
                        
                    ):(

                    <DefaultPhoto onPress={AddPhoto}> 
                        <Text large bold center>Click to add a picture</Text>
                    </DefaultPhoto>

                    )}

                </ImagesContainer>
                
                <CaptionContainer>
                    <CaptionTittle>Caption</CaptionTittle>
                    <FieldInfo onChangeText={post => setPost(post)}
                    value = {post}
                    />
                </CaptionContainer>


                <ButtonContainer><Text semi large center>Cancel</Text></ButtonContainer>
                <ButtonContainer><Text semi large center>Post</Text></ButtonContainer>

            </Main>
        </Container>

    );

}
const CaptionContainer = styled.View`
    margin-bottom: 32px;
    margin-left: 32px;
    margin-top: 32px;
`;

const CaptionTittle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const FieldInfo = styled.TextInput`

    border-bottom-color : #8e93a1;
    border-bottom-width : 0.5px;
    height : 48px;

`;


const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 50px;

`;

const ImagesContainer = styled.TouchableOpacity`
    width: 300px;
    height: 250px;
    align-self: center;
    margin-top: 40px;
`;

const DefaultPhoto = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    flex:1;
`;

const Picture = styled.Image`
    flex:1;
`;

const ButtonContainer = styled.TouchableOpacity`

    margin: 0 32px;
    margin-top: 20px;
    height: 48px;
    width: 150px;
    align-items: center;
    justify-content: center;
    background-color: #997950;
    border-radius: 4px;

`;