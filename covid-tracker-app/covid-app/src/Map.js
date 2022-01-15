import React from 'react'
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import {showDataonMap} from './util.js'
import './map.css'



function Map(countries,casesType,center,zoom) {
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer
            url='http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
            attribution='$copy; <a href="http://osm.org/copyright">Open Street Map </a> contributors'/>
            {showDataonMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map
