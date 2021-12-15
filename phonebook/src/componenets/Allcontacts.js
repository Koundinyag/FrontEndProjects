import {useSelector} from 'react-redux'
import React from 'react'
import Contactcard from './Contactcard'
import NewContactModal from './NewContactModal'

function Allcontacts() {
    const contacts = useSelector(state => state.allContacts)
    console.log(contacts)
    return (
        <div>
        {
            contacts.map(element => {
                return (<Contactcard name ={element.name} mobile ={element.mobile} isFav={element.isFav} id={element.id}/>)
            })
        }
        <NewContactModal/>
        </div>
    )
}

export default Allcontacts
