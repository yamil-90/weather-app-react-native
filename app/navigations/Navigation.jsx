import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import CitiesStack from './CitiesStack'



const Tab= createBottomTabNavigator(); 

export default function Navigation(){
    return(
        <NavigationContainer>
          <StatusBar
        animated={true}
        backgroundColor={'#b3ecff'}
      />
            <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={HomeStack}
            options={{
                headerShown: false

              }}
            />
            <Tab.Screen 
            name="ciudades" 
            component={CitiesStack}
            options={{
                headerShown: false
              }}
            />
            <Tab.Screen 
            name="Sobre Nosotros" 
            component={AboutStack}
            options={{
                headerShown: false
              }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    )
}