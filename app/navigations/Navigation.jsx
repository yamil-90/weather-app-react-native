import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import CitiesStack from './CitiesStack'
import { Icon } from "react-native-elements/dist/icons/Icon";


const Tab= createBottomTabNavigator(); 

export default function Navigation(){
    return(
        <NavigationContainer>
          <StatusBar
        animated={true}
        backgroundColor={'#b3ecff'}
      />
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={

                ({ route }) => ({
                    tabBarIcon: ({ color }) => ScreenOptions(route, color),
                    tabBarInactiveTintColor: "#646464",
                    tabBarActiveTintColor: "#00a680",
                    tabBarStyle: [
                        {
                          "display": "flex"
                        },
                        null
                      ]
                })}
            >
            <Tab.Screen 
            name="Home" 
            component={HomeStack}
            options={{
                headerShown: false

              }}
            />
            <Tab.Screen 
            name="Ciudades" 
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
function ScreenOptions(route, color) {
  let iconName;
  switch (route.name) {
      case "Home":
          iconName = "home-outline"
          break;
      case "Ciudades":
          iconName = "earth"
          break;
      case "Sobre Nosotros":
          iconName = "star-outline"
          break;
      case "Search":
          iconName = "magnify"
          break;
      case "Account":
          iconName = "account-outline"
          break;
      default:
          break;
  }
  return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
  )
}