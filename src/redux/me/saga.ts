import * as cache from "localforage";
import { put, takeLatest } from "redux-saga/effects";
import {authenticationSuccess, authenticationFailure} from "./actions";

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
    const data = yield response.text();
    if (response.ok) {
        cache.setItem("biblio-token", response.headers.get('authorization'));
        yield put(authenticationSuccess(data));
    } else {
        cache.removeItem("biblio-token");
        yield put(authenticationFailure(data))
    }
}

export default function* () {
    yield takeLatest('AUTHENTICATE', watchAuthenticate);
}
