import React, {useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from '../screens/Cities/Cities';
import AddCity from '../screens/Cities/AddCity'

const Stack = createNativeStackNavigator()

export default function CitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cities"
        component={Cities}
        options={{title: "Mis ciudades"}}
        
      />
      <Stack.Screen
        name="AddCity"
        component={AddCity}
        options={{title: "Agregar Ciudades"}}
      />
    </Stack.Navigator>
  )
}