import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import CityByCoordinates from '../components/Cities/CityByCoordinates';

export default function NearWeather({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const apiKey = "7225b503fd42cb9407fb83223b22e939";
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
        {/* location no anda en emulador asi que puse coordenadas fijas pero para probar en dispositivos fisicos hay que sacar esto y reemplazar por la info en "text" */}
      <CityByCoordinates lon={-58.4515931} lat={-34.6275438} apiKey={apiKey}  navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})