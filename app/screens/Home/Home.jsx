import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default function Home() {
    return (
        <View style={Styles.main_view}>
            <Text>
                placeholder para explicacion
            </Text>
            <Text>
                Yamil Español
            </Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    main_view:{
        flex:1,
        backgroundColor: 'lightblue'
    }
})