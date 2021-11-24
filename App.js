import React from 'react';
import { Animated, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigations/Navigation.jsx';
import { useState, useEffect } from 'react';
import NubeLogo from './assets/nube-logo.png';



export default function App() {

  // effecto de fade-in, mov del logo y incremento de font
  const [show] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(300))
  const [font] = useState(new Animated.Value(1))
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    Animated.parallel([
      Animated.timing(show, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: false
      }),
      Animated.timing(position, {
        toValue: -300,
        duration: 2000,
        useNativeDriver: false
      }),
    ]).start(()=>{
      Animated.timing(font, {
        toValue: 500,
        duration: 1000,
        useNativeDriver: false
      }).start(()=>setAnimated(true))
    });

    
  },[]);
  if(!animated)
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'#87CEEB'}
      />
      <View style={styles.animationContainer}>
        <Animated.Image

          source={NubeLogo}
          style={[styles.animationImage, {left:position}]}
// placeholder para una animacion mejor
        />
        <Animated.Text  style={[styles.animationText, { opacity: show , transform:[{scale:font}]}]}>Bienvenido!</Animated.Text>
      </View>
    </>
  );
  return(
    <Navigation/>
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
    color: "#fff",
    fontSize: 50,
    bottom: 75
  },
  animationImage: {
    width: 75,
    resizeMode: 'contain'
  }
});
