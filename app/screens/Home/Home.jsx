import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import NearWeather from "../../components/NearWeather";

export default function Home() {
    return (
        <View style={Styles.main_view}>
            <Text>
                ubicacion actual
            </Text>
            <NearWeather/>
            <Text>Explicacion de como operar la app</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    main_view:{
        flex:1,
        backgroundColor: 'lightblue',
        alignItems:'center'
    }
})