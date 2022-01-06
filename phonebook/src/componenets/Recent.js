import React from 'react'
import { useSelector } from 'react-redux'
import Contactcard from './Contactcard'

function Recent() {
    const allContacts = useSelector(state => state.allContacts)
    const recentCalls = useSelector(state => state.recentCalls)

    let arr=[]
    console.log(recentCalls.reverse())

    for(let i=recentCalls.length-1;i>=0;i--){
        let currentId = recentCalls[i].id
        let currentContact = {}
        allContacts.forEach(contact => {
            if(contact.id === currentId){
                currentContact = contact
            }
        })
        arr.push(<Contactcard name ={currentContact.name} mobile ={currentContact.mobile} isFav={currentContact.isFav} id={currentContact.id} timestamp={recentCalls[i].time}/>)
    }

    return (
        <div>
        {
            arr.map(e=>e)
        }
        </div>
    )
}

export default Recent