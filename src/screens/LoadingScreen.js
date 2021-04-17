import React from 'react';
import styled from 'styled-components';
import Text from '../componenets/Text'


export default LoadingScreen = () => {

    return (

        <Container>
            <Text title>DOGE</Text>
        </Container>

    );


}


const Container = styled.View`

    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;

`;
