import React from 'react';


import sunny from "../../assets/weatherBackground/sunny.jpg";
import rain from "../../assets/weatherBackground/rain.jpg";
import cloudy from "../../assets/weatherBackground/cloudy.jpg";

export default function BackgroundWeather(weather){
  
    switch (weather) {
        case 'Clouds':
          return cloudy
          break;
        case 'Clear':
          return sunny
          break;
        case 'Rain':
          return rain
          break;
        default:
          return sunny
          break;
      }

    }

    
