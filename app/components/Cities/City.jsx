import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function City(params) {
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(false)
    const { cityName, apiKey } = params
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then((response) => {
                if (response.status !== 200) seterror(true);
                return response.json();
            })
            .then((json) => setdata(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])
    return (

        <View style={Styles.view}>
            {loading ? <Text>Cargando...</Text> :
                <>
                    {error ? <Text>Ciudad: {cityName}: Error al Cargar los datos</Text> :
                        <>
                            <Text>Ciudad: {data.name}</Text>
                            <Text>Temperatura: {Math.round((data.main.temp - 273) * 10) / 10} </Text>
                            <Text>Humedad: {data.main.humidity} </Text>
                            <Text>Sensacion termica:  {Math.round((data.main.feels_like - 273) * 10) / 10} </Text>
                            <Text>Temperatura maxima: {Math.round((data.main.temp_max - 273) * 10) / 10} </Text>
                            <Text>Temperatura minima: {Math.round((data.main.temp_min - 273) * 10) / 10} </Text>

                        </>
                    }
                </>
            }
        </View>
    );
}

const Styles = StyleSheet.create({
    view:{
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomColor: 'black',
    borderBottomWidth: 1,
    height:150
    }
})