import React from 'react'
import { useSelector } from 'react-redux'

function Recent() {
    const allContacts = useSelector(state => state.allContacts)
    const recentCalls = useSelector(state => state.recentCalls)
    console.log(recentCalls)

    return (
        <div>
        
        </div>
    )
}

export default Recent

