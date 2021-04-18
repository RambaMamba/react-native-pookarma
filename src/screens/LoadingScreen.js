import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Text from '../componenets/Text';
import LottieView from 'lottie-react-native';
import {UserContext} from "../context/UserContext"

export default LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext);
    useEffect(() =>{
        setTimeout(async () => {
            setUser((state) => ({ ...state, isLoggedIn: false}));
        }, 500);

    }, [])
    return (

        <Container>
            <Text title>DOGE</Text>
             {/*
            <LottieView>
                source={require("../../assets/loading.gif")} 
                autoPlay 
                loop
                style={{ width:"100%" }}  
            </LottieView>
             */}
        </Container>

    );


}


const Container = styled.View`

    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;

`;
