import React from 'react';
import City from '../../components/Cities/City';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default function Cities({ navigation }) {


    let myCities = ['miami', 'sidney', 'newyork']
    const apiKey = "7225b503fd42cb9407fb83223b22e939";
    return (
        <View style={Styles.view}>
            <ScrollView style={Styles.scroll}>
                {
                    myCities.map((cityName, i) =>
                        <City key={i} cityName={cityName} apiKey={apiKey} />
                    )
                }
                
            </ScrollView>
            <TouchableOpacity
                    style={Styles.button}
                    onPress={() => navigation.navigate('AddCity')}
                >
                    <Icon color='#fff' name='add' size={45} />
                </TouchableOpacity>

        </View>
    )
}

const Styles = StyleSheet.create({
    button: {
        backgroundColor: 'darkblue',
        borderRadius: 100,
        width: 57,
        height: 57,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        bottom: 10

    },
    buttonText: {
        color: '#fff',
    },
    scroll: {
        paddingHorizontal: 10,
        
    },
    view:{
        flex:1, 
        position:'relative'
        
    }
})