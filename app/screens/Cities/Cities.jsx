import React from 'react';
import City from '../../components/Cities/City';

export default function Cities() {

    
    let myCities = ['miami', 'sidney','newyork']
    const apiKey = "7225b503fd42cb9407fb83223b22e939";
    return (
        <>
        {
            myCities.map((cityName, i) =>
                <City key={i} cityName={cityName} apiKey={apiKey}/>
            )
        }
        </>
    )
}