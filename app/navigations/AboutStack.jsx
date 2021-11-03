import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '../screens/About/About';

const Stack = createNativeStackNavigator()

export default function AboutStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={{title: "Sobre Nosotros"}}
        />
      </Stack.Navigator>
    );
  }