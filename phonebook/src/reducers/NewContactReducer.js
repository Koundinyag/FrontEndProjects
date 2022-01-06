export function NewContactReducer(state ={
    name:'',
    mobile:'',
    email:'',
    adress:'',
    dob:''
},
action){
    switch(action.type){
        case "CHANGE_NAME" :
                return {...state, name:action.payload}
        case "CHANGE_MOBILE" :
            return {...state, mobile:action.payload}
        case "CHANGE_EMAIL" :
            return {...state, email:action.payload}
        case "CHANGE_ADRESS" :
            return {...state, adress:action.payload}
        case "CHANGE_DOB" :
            return {...state, dob:action.payload}
        default :
            return state
    }
}
