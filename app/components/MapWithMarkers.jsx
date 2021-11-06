import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';


export default function MapWithMarkers(props) {
    const { markers, newMarker } = props

    return (
        <>
            <MapView
                style={Styles.mainMap}
                initialRegion={{
                    latitude: -34.78825,
                    longitude: -58.4324,
                    latitudeDelta: 0.020,
                    longitudeDelta: 0.0009,
                }}
                region={newMarker}
                showsUserLocation={true}
            >
                {markers.map((item, i) => {
                    return <Marker key={i} title={item.city} coordinate={{ longitude: item.lon, latitude: item.lat }} description={'pin'} color={'red'} />
                })
                }
            </MapView>

        </>
    )
}

const Styles = StyleSheet.create({
    //para que aparezca el mapa hay que agregar esta opcion al style
    mainMap: {
        ...StyleSheet.absoluteFillObject,
    },
})