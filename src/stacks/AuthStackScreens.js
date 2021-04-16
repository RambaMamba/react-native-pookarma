import React from "react";
import {createStackNavigator} from '@reac-navigation/stack'

import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
const AppStack = createStackNavigator();

export default AuthStackScreens = () => {

    return(

        <AppStack.Navigator headerMode = "none">
            <AuthStack.Screen name = "SignIn" component={SignInScreen} />
            <AuthStack.Screen name = "SignUp" component={SignUpScreen} />
        </AppStack.Navigator>


    );

}