import {combineReducers} from 'redux'
import { allContactsreducer } from "./allContactsreducer";
import { NewContactReducer } from './NewContactReducer';
import { RecentReducer } from './RecentReducer';

const allReducers = combineReducers({
    allContacts : allContactsreducer,
    newContact : NewContactReducer,
    recentCalls: RecentReducer
})


export default allReducers