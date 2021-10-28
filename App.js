import React from 'react';
import { StyleSheet} from 'react-native';
import Navigation from './app/navigations/Navigation.jsx'


export default function App() {
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
