import { all } from 'redux-saga/effects';

import Me from './me/saga';
import Books from './books/saga';


export default function* rootSaga() {
    yield all([
        Books(),
        Me()
    ]);
}