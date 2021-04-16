import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default SignInScreen = () => {

    return (

        <View style = {styles.container}>
            <Text>Sign In</Text>
        </View>

    )


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }

})