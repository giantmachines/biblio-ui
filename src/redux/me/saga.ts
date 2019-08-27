import { put, takeLatest } from "redux-saga/effects";
import {authenticationSuccess} from "./actions";

const LOGIN_URL='https://library-platform-staging.herokuapp.com/login';

function* watchAuthenticate(action:any){
    const {formData} = action;
    const request = {method: 'POST', body: JSON.stringify(formData)};
    const response = yield fetch(LOGIN_URL, request);
    const data = yield response.text();

    yield put(authenticationSuccess(data));
}

export default function* () {
    yield takeLatest('AUTHENTICATE', watchAuthenticate);
}