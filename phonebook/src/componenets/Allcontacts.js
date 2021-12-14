import React from 'react'
import Contactcard from './Contactcard'

function Allcontacts() {
    return (
        <div>
            <Contactcard name="Koundinya Gangadharuni" mobile="7036392933" isFav={true}/>
            <Contactcard name="Ramalatha Gangadharuni" mobile="9393934177" isFav={false}/>
            <Contactcard name="Sarma Gangadharuni" mobile="9490134177" isFav={true}/>
            <Contactcard name="Sruthi Chintalapathi" mobile="8309960008" isFav={false}/>
            <Contactcard name="Subrahmanyam Gangadharuni" mobile="9985672450" isFav={true}/>


        </div>
    )
}

export default Allcontacts
