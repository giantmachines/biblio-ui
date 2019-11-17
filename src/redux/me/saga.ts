import * as cache from "localforage";
import { put, takeLatest, delay } from "redux-saga/effects";
import {authenticationSuccess, authenticationFailure, invalidate} from "./actions";
import {authenticationEndpoint, pingEndpoint, STORAGE_KEY_AUTH_TOKEN, STORAGE_KEY_USER} from "../../config";
import {$fetch} from "../util";


const storageKeys = [
    {
        key: STORAGE_KEY_AUTH_TOKEN,
        set:(...args:any) => {
            cache.setItem(STORAGE_KEY_AUTH_TOKEN, args[0].headers.get('authorization'));
        }
    },
    {
        key: STORAGE_KEY_USER,
        set:(...args:any) => {
            cache.setItem(STORAGE_KEY_USER, args[1]);
        }
    }
];

function encodeForm(that:any) {
    return Object.entries(that)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value + '')}`)
        .join('&');
}

function clearCache() {
    storageKeys.forEach(item => { cache.removeItem(item.key) });
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
        storageKeys.forEach(item => { item.set(response, data) });
        yield put(authenticationSuccess(data));
    } else {
        clearCache();
        yield put(authenticationFailure(data));
    }
}

function* watchInvalidate(){
    yield fetch(authenticationEndpoint, {method: 'DELETE'});
    clearCache();
    //yield put(invalidate());  // Causes infinite loop.
}

function* watchAuthenticationState(condition:Function){
    if (condition()){
        const user = yield cache.getItem(STORAGE_KEY_USER);
        if (user) {
            yield put(authenticationSuccess(user));
        }
    } else {
        clearCache();
        yield put(invalidate());
    }
}

function* ping(){
    while(true) {
        const response = yield $fetch(pingEndpoint);
        switch (response.status) {
            case 401:
                clearCache();
                yield put(invalidate());
                break;
            case 200:
            case 204:
                const user = yield cache.getItem(STORAGE_KEY_USER);
                if (user) {
                    yield put(authenticationSuccess(user));
                }
                break;
        }
        delay(60000)
    }
}


export default function* () {
    yield takeLatest('AUTHENTICATE', watchAuthenticate);
    yield takeLatest('INVALIDATE', watchInvalidate);
}

export {watchAuthenticationState};
