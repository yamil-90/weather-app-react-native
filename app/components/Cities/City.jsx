import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider, Icon } from 'react-native-elements';
import RenderWeatherImage from "../../components/RenderWeatherImage";


export default function City(item) {
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(false)
    const { city, apiKey, onDelete, navigation } = item
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
            inputRange: [0, 10, 20, 100],
            outputRange: [-10, 10, 0, 1],
        });

        return (
            <TouchableOpacity
            //TODO agregar un icono de tacho de basura
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
            {loading ? <TouchableOpacity style={Styles.item}><Text>Cargando...</Text></TouchableOpacity> :
                <View style={Styles.view}>



                    <Swipeable renderLeftActions={swipeDelete}>
                        <TouchableOpacity
                        //TODO agregar un icono de flechita en la izquierda que apunte a la derecha para que se note que se puede hacer swipe

                            activeOpacity={0.8}
                            style={Styles.item}
                            onPress={() => navigation.navigate('DetailCity',{data})}>
                            {/* <Icon
                            name={'search'}
                            /> */}
                                {error ? <Text style={Styles.item_text}>Ciudad: {city}: Error al Cargar los datos</Text> :
                                    <>
                                        <RenderWeatherImage size={50} weather={data.weather[0]}/>
                                        <Text style={Styles.item_text}>{data.name}</Text>
                                        <Text style={Styles.item_text}>T: {Math.round((data.main.temp - 273.15) * 10) / 10}ºc </Text>
                                        
                                    </>
                                }
                        </TouchableOpacity>
                    </Swipeable>
                    <Divider width={2} orientation="horizontal" />

                </View>
            }
        </>
    );
}

const Styles = StyleSheet.create({
    view:{
        backgroundColor:'red',
        overflow: 'hidden',
        
    },
    item:{
        backgroundColor: '#fff',
        width:'100%',
        height: 120,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        padding: 15,
    },
    item_text:{
        color:'#080808'
    },
    content_delete:{
        backgroundColor:'red',
        width:50,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_delete_text:{
        color: '#fff'
    }
})