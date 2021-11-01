import React, {useState, useEffect} from 'react';
import City from '../../components/Cities/City';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function Cities({ navigation }) {
    const [myCities, setMyCities] = useState('');
    const [loading, setLoading] = useState(true)
    const [error, setError]= useState(null)
    useEffect(() => {
        getData()
        return () => {
        }
    }, [])
    const getData = async()=>{
        try {
        
            const value = await AsyncStorage.getItem('myCities');
        
            setMyCities(JSON.parse(value))
            setLoading(false)
    
        } catch (error) {
            console.log(error)
            setError(error)
        }
        console.log(myCities)
    }
    
    const apiKey = "7225b503fd42cb9407fb83223b22e939";
    return (
        <View style={Styles.view}>
            <ScrollView style={Styles.scroll}>
                
                {loading?<Text>Cargando</Text>:
                error || !myCities?<Text>Error al cargar los datos</Text>:
                myCities.map((object, i)=>{
                    return <City key={i} cityName={object.city} apiKey={apiKey} />
                })}
            
                
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