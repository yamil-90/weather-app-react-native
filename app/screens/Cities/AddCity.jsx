import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MapWithMarkers from '../../components/MapWithMarkers';
import { Alert } from 'react-native';



export default function AddCity({ navigation }) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [markers, setMarkers] = useState(null);
    const [newMarker, setNewMarker] = useState(null);
    useEffect(() => {
        getData()
        return () => {

        }
    }, [])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('myCities');
            const data = JSON.parse(value);
            setMarkers(data ? data : [])
            setLoading(false)

        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    useEffect(() => {
        // esto recarga la data cuando se activa el addListener "focus", asi se ven las nuevas ciudades despues de agregarlas
        const reload = navigation.addListener('focus', () => {
            console.log('refocus')
            getData()
        });

        return () => {

            reload;
        };
    }, [navigation]);

    //aca gusrdo la data si la request fue exitosa
    const saveData = async (values) => {
        console.log(values)
        try {
            let myCities = []
            const value = await AsyncStorage.getItem('myCities');
            if (value) {
                myCities = JSON.parse(value)
                if (myCities.find(item => item.city.trim().toUpperCase() === values.name.trim().toUpperCase())) {
                    return setError("Esta ciudad ya existe")
                } else {
                    myCities.push({ city: values.name.trim().toUpperCase(), lon: values.coord.lon, lat: values.coord.lat })
                    const jsonValue = JSON.stringify(myCities);
                    await AsyncStorage.setItem('myCities', jsonValue);
                    setNewMarker({ latitude: values.coord.lat, longitude: values.coord.lon, longitudeDelta: 0.015, latitudeDelta: 0.015 })
                    markers.push(newMarker);
                    getData();
                    Alert.alert(
                        'Ciudad agregada!'
                    )
                    setError('')
                    //console.log(markers);
                    //navigation.navigate('Cities')
                }
            } else {
                myCities.push({ city: values.name.trim().toUpperCase(), lon: values.coord.lon, lat: values.coord.lat })
                const jsonValue = JSON.stringify(myCities);
                // console.log(jsonValue)
                await AsyncStorage.setItem('myCities', jsonValue);
                setNewMarker({ latitude: values.coord.lat, longitude: values.coord.lon, longitudeDelta: 0.015, latitudeDelta: 0.015  })
                getData()
                // navigation.navigate('Cities')
            }
        } catch (error) {
            return setError(error)
        }
    }

    // funciones de validacion con yup y de procesamiento de la info del formulario con asyncStorage (version de la comunidad)
    const processSubmit = async (values) => {

        
        // setLoading(true)
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values.city}&appid=${process.env.WEATHER_API}`)
            .then((response) => {
                if (response.status !== 200) return setError('esta ciudad no existe');
                else return response.json()
                
            })
            .catch((error) => console.log(error))
            .then((json) => {
                console.log(json)
                if(json){
                    saveData(json)
                }
            });
    }
    const citySchema = Yup.object().shape({
        city: Yup.string()
            .min(3, 'Minimo 3 caracteres')
            .max(50, 'El texto ingresado es muy largo')
            .required('Este campo es obligatorio'),
    });
    return (
        <View style={Styles.view}>
            <ScrollView style={Styles.scroll}>
                <Formik
                    validationSchema={citySchema}
                    initialValues={{ city: '' }}
                    onSubmit={processSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setError }) => (
                        <>

                            <View style={Styles.form_group}>
                                <Text>Ciudad</Text>

                                <TextInput
                                    style={Styles.form_input}
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city} />
                                {errors.city && touched.city ? (
                                    <Text style={Styles.error}>{errors.city}</Text>
                                ) : null}
                                {error ? (
                                    <Text style={Styles.error}>{error}</Text>
                                ) : null}
                            </View>
                            <View style={Styles.form_button}>
                                <TouchableOpacity
                                    style={Styles.button}
                                    onPress={handleSubmit}
                                >
                                    <Text style={Styles.buttonText}>Agregar Ciudad</Text>
                                </TouchableOpacity>

                            </View>
                        </>
                    )}
                </Formik>
                <View style={Styles.map_view}>
                    {!loading ? <MapWithMarkers newMarker={newMarker} markers={markers} /> : <Text>loading....</Text>}

                </View>
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    view: {
        flex:1,
       
        
    },
    map_view: {
        flex: 1,
        height:350,
        marginTop:10
        
    },
    scroll: {
        paddingHorizontal: 20,
        
    },
    form_group: {
        marginTop: 30,

        marginHorizontal: 10,

    },
    form_input: {
        backgroundColor: '#e3e3e3',
        paddingHorizontal: 20,

        borderRadius: 10,
    },
    form_button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: 'darkblue',
        borderRadius: 10,
        width: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10

    },
    buttonText: {
        color: '#fff',
    },
    error: {
        fontSize: 13,
        color: '#C70039'
    }
})