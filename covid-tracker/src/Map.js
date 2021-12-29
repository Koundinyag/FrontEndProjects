import { LeafletMap,TileLayer } from 'leaflet'
import React from 'react'
import Leaflet from 'leaflet'

function Map() {
    return (
        <div className='map'>
            <LeafletMap>
            <TileLayer
            url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'/>
            </LeafletMap>
        </div>
    )
}

export default Map;
