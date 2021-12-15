import {combineReducers} from 'redux'
import { allContactsreducer } from "./allContactsreducer";

const allReducers = combineReducers({
    allContacts : allContactsreducer
})

export default allReducers