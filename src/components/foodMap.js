import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const FoodMap = () => {
    let options = {
        lat: 38.9072,
        lng: -77.0369,
        zoom: 13,
    }
    const position = [options.lat, options.lng]

    if (typeof window !== 'undefined') {
        return (
            <Map center={position} zoom={options.zoom}>
                {/* Map code goes here */}
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </Map>
        )
    }
    return null
}

export default FoodMap;
