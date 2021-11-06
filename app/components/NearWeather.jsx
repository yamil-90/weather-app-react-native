import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native';
import * as Location from 'expo-location';
import CityByCoordinates from '../components/Cities/CityByCoordinates';


export default function NearWeather({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true)
  const apiKey= process.env.WEATHER_API
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let currentLocation = await Location.getLastKnownPositionAsync();
      setLocation(currentLocation);
      setLoading(false)
      
      return{
      }
    })();
  }, []);

  let text = 'Cargando..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
  
      {!location?<Text>{text}</Text>:<CityByCoordinates lon={location.coords.longitude} lat={location.coords.latitude} apiKey={apiKey}  navigation={navigation}/>}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        
    }
})