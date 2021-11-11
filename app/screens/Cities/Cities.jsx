import React, { useState, useEffect } from 'react';
import City from '../../components/Cities/City';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';


export default function Cities({ navigation }) {
    const [myCities, setMyCities] = useState('');
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("");
    const [myFilteredCities, setMyFilteredCities] = useState([]);

    const getData = async () => {
        try {

            const value = await AsyncStorage.getItem('myCities');

            setMyCities(JSON.parse(value))
            setMyFilteredCities(myCities);
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

            setSearch("");
            const value = AsyncStorage.getItem('myCities').then((value) => {
            const allCities = JSON.parse(value);
            setMyFilteredCities(allCities);
        });          
            
        });

        return () => {

            reload;
        };
    }, [navigation]);

    // funcion para borrar las ciudades, filtra el listado de ciudades para sacar item.city y lo guarda en storage 
    const onDelete = async item => {
        try {
            const current = myCities.filter(value => value.city !== item.city);
            const json_value = JSON.stringify(current);
            await AsyncStorage.setItem('myCities', json_value);
            setMyCities(current);
        } catch (error) {
            console.log(error);
        }
    };

    const apiKey= process.env.WEATHER_API
    

    return (
      <View style={Styles.view}>
        {loading ? (
          <Text>Cargando</Text>
        ) : error || !myCities ? (
          <Text>Error al cargar los datos {error}</Text>
        ) : (
          <>
            <SearchBar
              placeholder="Ciudad"
              render={function(){
                  console.log("hola");
              }}
              onChangeText={function (e) {
                setSearch(e);
                const value = AsyncStorage.getItem('myCities').then((value) => {
                const allCities = JSON.parse(value);
                var cities = allCities.filter((c) =>
                  c.city
                    .trim()
                    .toUpperCase()
                    .includes(e.trim().toUpperCase())
                );
                if (e.trim() == "") {
                  cities = allCities;
                }
                setMyFilteredCities(cities);
                console.log("cities: " + cities.map((c) => c.city));
            })
              }}
              value={search}
              containerStyle={Styles.searchBar}
              inputContainerStyle={Styles.inputContainer}
              inputStyle={Styles.inputText}
            />
            <FlatList
              data={myFilteredCities}
              renderItem={({ item, index }) => (
                <City
                  {...item}
                  navigation={navigation}
                  onDelete={onDelete}
                  key={index}
                  apiKey={apiKey}
                />
              )}
              keyExtractor={(item) => item.city}
            />
          </>
        )}
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("AddCity")}
        >
          <Icon color="#fff" name="add" size={45} />
        </TouchableOpacity>
      </View>
    );
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
    view: {
        flex: 1,
        position: 'relative',
    },
    searchBar:{
        backgroundColor:"#fff",
        
    },
    inputContainer:{
        backgroundColor:"#f6f6f6",
    },
    inputText:{
        color:"black"
    },
})