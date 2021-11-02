import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function City(item, { navigation }) {
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(false)
    const { city, apiKey, onDelete } = item
    const [data, setdata] = useState([])
    // usamos fetch para conseguir la data de api weather
    // funcionaria mejor con axios? <--- pendiente
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => {
                if (response.status !== 200) seterror(true);
                return response.json();
            })
            .then((json) => setdata(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])

    const swipeDelete = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });

        return (
            <TouchableOpacity
                style={Styles.content_delete}
                activeOpacity={0.8}
                onPress={() => onDelete(item)}>
                <Animated.Text
                    style={[
                        Styles.content_delete_text,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    Delete
                </Animated.Text>
            </TouchableOpacity>
        );
    };

    return (

        <>
            {loading ? <Text>Cargando...</Text> :
                <>



                    <Swipeable renderLeftActions={swipeDelete}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={Styles.item}
                            onPress={() => console.log('go to details')}>
                            <View style={Styles.view}>
                                {error ? <Text>Ciudad: {city}: Error al Cargar los datos</Text> :
                                    <>
                                        <Text>Ciudad: {data.name}</Text>
                                        <Text>Temperatura: {Math.round((data.main.temp - 273.15) * 10) / 10} </Text>
                                        <Text>Humedad: {data.main.humidity} </Text>
                                        <Text>Sensacion termica:  {Math.round((data.main.feels_like - 273.15) * 10) / 10} </Text>
                                        <Text>Temperatura maxima: {Math.round((data.main.temp_max - 273.15) * 10) / 10} </Text>
                                        <Text>Temperatura minima: {Math.round((data.main.temp_min - 273.15) * 10) / 10} </Text>
                                    </>
                                }
                            </View>
                        </TouchableOpacity>
                    </Swipeable>


                </>
            }
        </>
    );
}

const Styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 150
    }
})