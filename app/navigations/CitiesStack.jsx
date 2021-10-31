import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from '../screens/Cities/Cities';

const Stack = createNativeStackNavigator()




export default function CitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Todas las ciudades"
        component={Cities}
      />
    </Stack.Navigator>
  )
}