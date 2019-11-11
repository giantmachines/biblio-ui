import { put, takeLatest } from "redux-saga/effects";
import {authenticationSuccess} from "./actions";

import {authenticationEndpoint} from "../../config";

function* watchAuthenticate(action:any){
    const {formData} = action;
    const request = {method: 'POST', body: JSON.stringify(formData)};
    const response = yield fetch(authenticationEndpoint, request);
    const authorization = response.headers.get('authorization');
    const data = yield response.text();

    yield put(authenticationSuccess(data));
}

export default function* () {
    yield takeLatest('AUTHENTICATE', watchAuthenticate);
}
