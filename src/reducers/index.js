import {combineReducers } from 'redux';

import city from './city';
import userinfo from './userinfo';


const rootReducers = combineReducers({
    city,
    userinfo
})

export default rootReducers;