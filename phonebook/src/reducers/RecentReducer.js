export function RecentReducer(state =[],
action){
    const maxSize = 10;
    switch(action.type){
        case "ADD_RECENT" :
            let newState = [...state]
            if(newState.length === maxSize){
                newState.shift()
            }
            newState.push(action.payload)
             return newState
        default :
            return state
    }
}