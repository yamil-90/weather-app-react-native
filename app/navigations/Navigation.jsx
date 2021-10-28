import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import CitiesStack from './CitiesStack'



const Tab= createBottomTabNavigator(); 

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Cities" component={CitiesStack}/>
            <Tab.Screen name="About" component={AboutStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}