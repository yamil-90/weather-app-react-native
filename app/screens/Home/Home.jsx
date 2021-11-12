import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import NearWeather from "../../components/NearWeather";
import {SliderBox} from "react-native-image-slider-box"
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
    const images= [
        require("../../../assets/howToUseImages/misCiudades-text.png"),
        require("../../../assets/howToUseImages/agregarCiudad-text.png"),
        require("../../../assets/howToUseImages/delete-city-text.png")
    
    ]
    return (
        <LinearGradient colors={['#87CEEB', '#b5d1ff']} style={Styles.main_view}>
            <Text>
                ubicacion actual
            </Text>
            <NearWeather/>
            <View style={Styles.slider_box}>
            <SliderBox  
            resizeMode={'contain'}
            sliderBoxHeight={350}
             images={images} />
            </View>
        </LinearGradient>
    )
}
const Styles = StyleSheet.create({
    main_view:{
        flex:1,
        backgroundColor: '#87CEEB',
        alignItems:'center'
    },
    slider_box:{
        flex:1,
    }
})