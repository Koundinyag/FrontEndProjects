import React from 'react'
import { useSelector } from 'react-redux'
import Contactcard from './Contactcard'

function Favourates() {
    const contacts = useSelector(state => state.allContacts)
    return (
        <div>
            {
                contacts.map(element => {
                    if(element.isFav === true){
                        return (<Contactcard name ={element.name} mobile ={element.mobile} isFav={element.isFav} id={element.id}/>)
                    }
                })
            }
        </div>
    )
}

export default Favourates
