import React from "react";
import { Text } from "react-native-elements";
import clearSkyD from "../../assets/weatherImage/clearSky-d.png";
import clearSkyN from "../../assets/weatherImage/clearSky-n.png";
import fewCloudsD from "../../assets/weatherImage/fewClouds-d.png";
import fewCloudsN from "../../assets/weatherImage/fewClouds-n.png";
import scatteredCloudsD from "../../assets/weatherImage/scatteredClouds-d.png";
import scatteredCloudsN from "../../assets/weatherImage/scatteredClouds-n.png";
import brokenCloudsD from "../../assets/weatherImage/brokenClouds-d.png";
import brokenCloudsN from "../../assets/weatherImage/brokenClouds-n.png";
import showerRainD from "../../assets/weatherImage/showerRain-d.png";
import showerRainN from "../../assets/weatherImage/showerRain-n.png";
import rainD from "../../assets/weatherImage/rain-d.png";
import rainN from "../../assets/weatherImage/rain-n.png";
import thunderStormD from "../../assets/weatherImage/thunderStorm-d.png";
import thunderStormN from "../../assets/weatherImage/thunderStorm-n.png";
import snowD from "../../assets/weatherImage/snow-d.png";
import snowN from "../../assets/weatherImage/snow-n.png";
import mistD from "../../assets/weatherImage/mist-d.png";
import mistN from "../../assets/weatherImage/mist-n.png";

import { Image } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default function RenderWeatherImage({ weather, size }) {
    let source = ''
    switch (weather.icon) {
        case '01d':
            source = clearSkyD
            break;
        case '01n':
            source = clearSkyN
            break;
        case '02d':
            source = fewCloudsD
            break;
        case '02n':
            source = fewCloudsN
            break;
        case '03d':
            source = scatteredCloudsD
            break;
        case '03n':
            source = scatteredCloudsN
            break;
        case '04d':
            source = brokenCloudsD
            break;
        case '04n':
            source = brokenCloudsN
            break;
        case '09d':
            source = showerRainD
            break;
        case '09n':
            source = showerRainN
            break;
        case '10d':
            source = rainD
            break;
        case '10n':
            source = rainN
            break;
        case '11d':
            source = thunderStormD
            break;
        case '11n':
            source = thunderStormN
            break;
        case '13d':
            source = snowD
            break;
        case '13n':
            source = snowN
            break;
        case '50d':
            source = mistD
            break;
        case '50n':
            source = mistN
            break;
        default:
            source = clearSkyD
            break;
    }
    return (
        <View style={Styles.view}>

            <Image style={{ width: size, height: size }} source={source} />
        </View>
    )
}
const Styles = StyleSheet.create({
    // image:{
    //     width:50,
    //     height:50

    // },
    view: {
    }
})