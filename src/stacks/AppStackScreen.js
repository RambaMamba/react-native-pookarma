import React from "react";
import {createStackNavigator} from '@reac-navigation/stack'

import AuthStackScreens from './AuthStackScreens'
const AppStack = createStackNavigator();

export default AppStackScreens = () => {

    return(

        <AppStack.Navigator headerMode = "none">
            <AppStack.Screen name = "Auth" component={AuthStackScreens} />
        </AppStack.Navigator>


    );

}