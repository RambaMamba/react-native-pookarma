import React, {useState} from "react";
import styled from "styled-components";
import Text from '../componenets/Text';


export default SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[loading, setLoading] = useState(false);

    return (

        <Container>
            <Main>
                <Text title semi center>Paw In!</Text>
            </Main>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus = {true}
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

            <SignInContainer disabled={loading}>
                {loading ? (
                    <Loading />
                ):(
                    <Text bold center color="#ffffff">Sign In</Text>
                )}
                    
            </SignInContainer>

            <SignUp onPress={() => navigation.navigate("SignUp")}>
                <Text small center>
                    New to Doge?{" "}
                    <Text color="#964B00" bold>
                        Sign Up
                    </Text>
                </Text>
            </SignUp>

            <StatusBar barStyle="light-content"/>
        </Container>

    );


};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 75px;

`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
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

const SignInContainer = styled.TouchableOpacity`

    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #964B00;
    border-radius: 6px;

`;

const SignUp = styled.TouchableOpacity`

    margin-top: 20px;


`;

const Loading = styled.ActivityIndicator.attrs(props => ({ 

    color: "#ffffff",
    size: "small"

 }))``; 

const StatusBar = styled.StatusBar``;