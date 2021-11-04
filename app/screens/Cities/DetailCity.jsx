import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import RenderWeatherImage from "../../components/RenderWeatherImage";
import BackgroundWeather from "../../components/BackgroundWeather";

export default function DetailCity({ route }) {
  const { data } = route.params;
  

  return (
    <View>
    <BackgroundWeather weather={data.weather[0].main} style={Styles.backgroundImage}/>
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
      </View>
  );
}

const Styles = StyleSheet.create({

  
  text_main: {
    fontSize: 80,
  },
  image_view: {
    flex: 1,
    position:"absolute",
    paddingTop:90,
    marginLeft:40,
    marginTop:120,
  },
  box:{
    alignItems: "center",
    justifyContent:"center",
    marginTop:28,
  },
  text:{fontSize: 20,
    fontWeight: 'bold'
  }
});
