export function new_contact(contact){
    return {
        type:'NEW_CONTACT',
        payload: contact
    }
}

export function toggle_fav(id){
    return {
        type:'TOGGLE_FAV',
        payload:id
    }
}

export function changeName(name){
    return {
        type:'CHANGE_NAME',
        payload: name
    }
    }

export function changeMobile(mobile){
    return{
        type:'CHANGE_MOBILE',
        payload: mobile
    }
}

export function changeEMailID(email){
    return{
        type:'CHANGE_EMAIL',
        payload: email
    }
}

export function changeAdress(adress){
    return{
        type:'CHANGE_ADRESS',
        payload: adress
    }
}

export function changeDateOfBirth(dob){
    return{
        type:'CHANGE_DOB',
        payload: dob
    }
}


export function add_recent(id){
    return {
        type:'ADD_RECENT',
        payload: id
    }
}