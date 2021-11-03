import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator()

export default function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: "Pagina principal"}}
        />
      </Stack.Navigator>
    );
  }