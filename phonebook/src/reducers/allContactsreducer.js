export function allContactsreducer(state =[{
    id:0,
    name:"Indian Railways",
    mobile:"7554090600",
    email:"indian-railways@gmail.com",
    isFav:false
},
{
    id:1,
    name:"Indian Airways",
    mobile:"18602331407",
    email:"indian-airways@gmail.com",
    isFav:false
},

{
    id:2,
    name:"Indian Navy",
    mobile:"01121410525",
    email:"indian-navy@gmail.com",
    isFav:false
},

{
    id:3,
    name:"Indian Army",
    mobile:"01121410525",
    email:"indian-army@gmail.com",
    isFav:false
},
{
    id:4,
    name:"Police Force",
    mobile:"100",
    email:"indian-police@gmail.com",
    isFav:false
},

{
    id:5,
    name:"Indian Railways",
    mobile:"7554090600",
    email:"indian-railways@gmail.com",
    isFav:false
}],
action){
    switch(action.type){
        case "NEW_CONTACT" :
            return [...state, {...action.payload, isFav:false, id: (state ? [state.length-1].id+1 : 0)}]
        case "TOGGLE_FAV" :
            let copyState = {...state}
            state.forEach((element, i) => {
                if(action.payload === element.id){
                    copyState[i].isFav = !state[i].isFav
                }
            })
            return copyState
        default :
            return state
    }
}