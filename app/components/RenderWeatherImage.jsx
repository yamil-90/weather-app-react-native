import React from "react";
import { Text } from "react-native-elements";
import clouds from '../../assets/weatherImage/clouds.png';
import sunny from '../../assets/weatherImage/sunny.png';
import rain from '../../assets/weatherImage/rain.png';
import { Image } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default function RenderWeatherImage({weather, size}){
  
    let source = ''
    switch (weather) {
        case 'Clouds':
            source = clouds
            break;
        case 'Clear':
            source = sunny
            break;
        case 'Rain':
            source = rain
            break;
        default:
            source = sunny
            break;
    }
    return (
    <View style={Styles.view}>
    <Image  style={{width:size, height:size}} source={source} />
    </View>
    )
}
const Styles = StyleSheet.create({
    // image:{
    //     width:50,
    //     height:50
        
    // },
    view:{
    }
})