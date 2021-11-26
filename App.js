import React from 'react';
import { Animated, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigations/Navigation.jsx';
import { useState, useEffect } from 'react';
import NubeLogo from './assets/nube-logo.png';
import { LinearGradient } from 'expo-linear-gradient';

import fewClouds from './assets/weatherImage/fewClouds-d.png'
import brokenClouds from './assets/weatherImage/brokenClouds-d.png'
import rain from './assets/weatherImage/rain-d.png'
import overcastClouds from './assets/weatherImage/overcastClouds-d.png'
import thunderstorm from './assets/weatherImage/thunderStorm-d.png'
import sunny from './assets/weatherImage/clearSky-d.png'

export default function App() {

  // effecto de fade-in, mov del logo y incremento de font
  const [show] = useState(new Animated.Value(0));
  const [position1] = useState(new Animated.Value(500));
  const [position2] = useState(new Animated.Value(500));
  const [position3] = useState(new Animated.Value(500));
  const [position4] = useState(new Animated.Value(500));
  const [position5] = useState(new Animated.Value(500));
  const [font] = useState(new Animated.Value(1));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(show, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: false
      }),
      Animated.timing(position1, {
        toValue: -600,
        duration: 3500,
        useNativeDriver: false
      }),
      Animated.timing(position2, {
        toValue: -550,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(position3, {
        toValue: -750,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(position4, {
        toValue: -700,
        duration: 3000,
        useNativeDriver: false
      }),
      Animated.timing(position5, {
        toValue: -650,
        duration: 3500,
        useNativeDriver: false
      }),
    ]).start(() => {
      Animated.timing(font, {
        toValue: 500,
        duration: 1000,
        useNativeDriver: false
      }).start(() => setAnimated(true))
    });


  }, []);
  if (!animated)
    return (

      <LinearGradient colors={['#87CEEB', '#b5d1ff']} style={styles.main_view}>
        <StatusBar
          animated={true}
          backgroundColor={'#87CEEB'}
        />
        <View style={styles.animationContainer}>
          <Animated.Image
            source={fewClouds}
            style={[styles.animationImage, { left: position1 }, { top: 0 }]}
          />
          <Animated.Image
            source={brokenClouds}
            style={[styles.animationImage, { left: position2 }, { top: 85 }]}
          />
          <Animated.Image
            source={rain}
            style={[styles.animationImage, { left: position3 }, { top: 100 }]}
          />
          <Animated.Image
            source={overcastClouds}
            style={[styles.animationImage, { left: position4 }, { top: 130 }]}
          />
          <Animated.Image
            source={sunny}
            style={[styles.animationImage, { left: position5 }, { top: 170 }]}
          />

          <Animated.Text style={[styles.animationText, { opacity: show, transform: [{ scale: font }] }]}>Bienvenido!</Animated.Text>
        </View>
      </LinearGradient>
    );
  return (
    <Navigation />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#87CEEB',
  },
  animationText: {
    position: 'absolute',
    color: "#fff",
    fontSize: 50,
    bottom: 75
  },
  animationImage: {
    width: 75,
    resizeMode: 'contain',
    position: 'absolute',
  },
  main_view: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center'
  },
  slider_box: {
    flex: 1,
  }
});
