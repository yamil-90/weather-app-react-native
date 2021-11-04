import React, {useState} from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function AddCity({navigation}) {
    const [error, setError] = useState('') 
    
    // funciones de validacion con yup y de procesamiento de la info del formulario con asyncStorage (version de la comunidad)
    const processSubmit = async (values) => {

        try {
            let myCities = []
            const value = await AsyncStorage.getItem('myCities');
            if (value) {
                myCities = JSON.parse(value)
                if(myCities.find(item=> item.city.trim().toUpperCase()===values.city.trim().toUpperCase())){
                    return setError("Esta ciudad ya existe")
                }else {
                myCities.push({...values, city: values.city.trim().toUpperCase()})
                const jsonValue = JSON.stringify(myCities);
                await AsyncStorage.setItem('myCities', jsonValue)
                // console.log(jsonValue)
                navigation.navigate('Cities')
                }
            } else {
                myCities.push(values)
                const jsonValue = JSON.stringify(myCities);
                await AsyncStorage.setItem('myCities', jsonValue)
                navigation.navigate('Cities')
            }
        } catch (error) {
            return setError(error)
        }
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
                                    ):null}
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
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    view: {
        flex: 1
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
    error:{
        fontSize:13,
        color: '#C70039'
    }
})