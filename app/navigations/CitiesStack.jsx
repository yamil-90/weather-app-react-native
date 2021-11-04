import React, {useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from '../screens/Cities/Cities';
import AddCity from '../screens/Cities/AddCity';
import DetailCity from '../screens/Cities/DetailCity';

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
      <Stack.Screen
        name="DetailCity"
        component={DetailCity}
        options={{title: "Ciudad"}}
      />
    </Stack.Navigator>
  )
}