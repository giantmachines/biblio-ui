import { put, takeLatest } from "redux-saga/effects";
import {authenticationSuccess} from "./actions";

import {authenticationEndpoint} from "../../config";

function encodeForm(that:any) {
    return Object.entries(that)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value + '')}`)
        .join('&');
}

function* watchAuthenticate(action:any){
    const {formData} = action;
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
        body: encodeForm(formData)
    };
    const response = yield fetch(authenticationEndpoint, request);
    //const authorization = response.headers.get('authorization');
    const data = yield response.text();

    yield put(authenticationSuccess(data));
}

export default function* () {
    yield takeLatest('AUTHENTICATE', watchAuthenticate);
}
