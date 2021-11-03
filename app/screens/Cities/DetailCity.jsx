import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import RenderWeatherImage from "../../components/RenderWeatherImage";


export default function DetailCity({ route }) {
    const { data } = route.params;

    return (
        <View style={Styles.view}>

            <View>
                <Text>{data.name}</Text>
                <View>
                    <Text style={Styles.text_main}>{Math.round((data.main.temp - 273.15) * 10) / 10}ºc </Text>
                </View>
                <Text >H {data.main.humidity}% </Text>
                <Text >Sensacion {Math.round((data.main.feels_like - 273.15) * 10) / 10}ºc </Text>
                <Text >Max/Min {Math.round((data.main.temp_max - 273.15) * 10) / 10}/{Math.round((data.main.temp_min - 273.15) * 10) / 10}ºc </Text>
            </View>
            <View style={Styles.image_view}>
                <RenderWeatherImage size={100} weather={data.weather[0].main} />

            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    image: {

    },
    view: {
        backgroundColor: 'lightblue',
        padding: 20,
        flex: 1,
        flexDirection: "row"

    },
    text_main: {
        fontSize: 50
    },
    image_view: {
        flex: 1,
        alignItems: 'center',

    }
})