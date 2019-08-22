import { all } from 'redux-saga/effects';

//import MeSaga from './me/saga';
import Books from './books/saga';


export default function* rootSaga() {
    yield all([

        Books(),

    ]);
}