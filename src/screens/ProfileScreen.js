import React, {useContext} from 'react';
import styled from 'styled-components';

import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

import Text from '../componenets/Text';

export default ProfileScreen = () => {
    const [user, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    return (
        <Container>
            <ProfilePhotoContainer>
                <ProfilePhoto 
                source={
                    user.profilePhotoUrl === "default"
                    ? require("../../assets/defaultprofile.png")
                    : {uri: user.profilePhotoUrl}
                    }>
                </ProfilePhoto>
            </ProfilePhotoContainer>

            <Text medium bold margin="16px 0 32px 0">
                    {user.username}
            </Text>

            <Logout> 
                <Text large bold>Log Out</Text>
            </Logout>
        </Container>
    );

};

const Container = styled.View`

    align-items: center;
    margin-top: 64px;
    flex: 1;
`;
const ProfilePhotoContainer = styled.View`
    shadow-opacity: .6;
    shadow-radius: 30px;
    shadow-color: #222222;
`;
const ProfilePhoto = styled.Image`

    width: 128px;
    height: 128px;
    border-radius: 64px;

`;
const Logout = styled.TouchableOpacity`
    margin-bottom: 32px;
`;