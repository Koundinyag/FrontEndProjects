import React from 'react'
import Contactcard from './Contactcard'

function Allcontacts() {
    return (
        <div>
            <Contactcard name="Indian Railways" mobile="7554090600" isFav={true}/>
            <Contactcard name="Indian Airways" mobile="18602331407" isFav={false}/>
            <Contactcard name="Indian Navy" mobile="01121410525" isFav={true}/>
            <Contactcard name="Indian Army" mobile="01121410525" isFav={false}/>
            <Contactcard name="Police Force
            " mobile="100" isFav={true}/>


        </div>
    )
}

export default Allcontacts
