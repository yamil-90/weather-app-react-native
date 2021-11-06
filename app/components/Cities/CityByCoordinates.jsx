import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import RenderWeatherImage from "../../components/RenderWeatherImage";


export default function CityByCoordinates(item) {
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(false)
    const { lat, lon, apiKey, onDelete, navigation } = item
    const [data, setdata] = useState([])
    // usamos fetch para conseguir la data de api weather
    // funcionaria mejor con axios? <--- pendiente
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
            .then((response) => {
                if (response.status !== 200) seterror(true);
                return response.json();
            })
            .then((json) => setdata(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
            
    }, [])
    return (

        <>
            {loading ? <TouchableOpacity style={Styles.item}><Text>Cargando...</Text></TouchableOpacity> :
                <View style={Styles.view}>



                   
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={Styles.item}
                            >
                            
                                {error ? <Text style={Styles.item_text}>Error al Cargar los datos</Text> :
                                    <>
                                    <RenderWeatherImage size={50} weather={data.weather[0].main}/>
                                    <Text Styles={Styles.item_text}>{data.main.temp}ºc</Text>
                                    <Text Styles={Styles.item_text}>{data.name}</Text>
                                    </>
                                }
                        </TouchableOpacity>
                    <Divider width={2} orientation="horizontal" />

                </View>
            }
        </>
    );
}

const Styles = StyleSheet.create({
    view:{
        overflow: 'hidden',
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        
    },
    item:{
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    item_text:{
        color:'#080808'
    },
})