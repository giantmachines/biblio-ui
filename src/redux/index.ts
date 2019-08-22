import { combineReducers } from 'redux';


import me from './me';
import books from './books'


export default combineReducers({
    me,
    books
});