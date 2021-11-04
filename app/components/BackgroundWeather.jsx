import React from 'react';
import { ImageBackground, View, Image, StyleSheet } from 'react-native';


import sunny from "../../assets/weatherBackground/sunny.jpg";
import rain from "../../assets/weatherBackground/rain.jpg";
import cloudy from "../../assets/weatherBackground/cloudy.jpg";

export default function BackgroundWeather({weather}){
  
    let source = ''
    switch (weather) {
        case 'Clouds':
            source = cloudy
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
        <Image source={source} style={Styles.background}>
            
        </Image>
        

    )}

     const Styles = StyleSheet.create({
        background:{
         width:500,
         height:800,   
        
        flex: 1,
        position: 'absolute'
        
    }

     })


    
