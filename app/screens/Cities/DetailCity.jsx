import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import defaultBackground from "../../../assets/weatherBackground/sunny.jpg"
import BackgroundWeather from "../../components/BackgroundWeather";


export default function DetailCity({ route }) {
  const { data } = route.params;
  const [backgroundImage, setbackgroundImage] = useState(defaultBackground)

  useEffect(()=>{
    //la funcion backgroundWeather nos da la imagen dependiendo del clima que le pasamos como parametro. la puse afuera para que quede mas limpio
    setbackgroundImage(BackgroundWeather(data.weather[0].main))
  }, [])

  
  return (
    <View style={Styles.view}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={Styles.image} >
        <View style={Styles.box}>
          <View>
            <Text style={Styles.text}>{data.name}</Text>
            <View>
              <Text style={Styles.text_main}>
                {Math.round((data.main.temp - 273.15) * 10) / 10}ºC{" "}
              </Text>
            </View>
            <Text style={Styles.text}>HR: {data.main.humidity}% </Text>
            <Text style={Styles.text}>
              Sensacion: {Math.round((data.main.feels_like - 273.15) * 10) / 10}ºC{" "}
            </Text>
            <Text style={Styles.text}>
              Max/Min: {Math.round((data.main.temp_max - 273.15) * 10) / 10}/
              {Math.round((data.main.temp_min - 273.15) * 10) / 10}ºC{" "}
            </Text>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const Styles = StyleSheet.create({

  view: {
    flex: 1
  },
  text_main: {
    fontSize: 80,
  },
  image_view: {
    flex: 1,
    position: "absolute",
    paddingTop: 90,
    marginLeft: 40,
    marginTop: 120,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
