import { MeState } from './types';

interface Action {
  type:string;
  payload?:any;
  formData?:any;
}

const initialState: MeState = {
  user: null,
  authenticated: false,
  pending: false,
  error: null
};

export default (state: MeState = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {...state, pending: true, formData:action.formData};
    case 'AUTHENTICATION_SUCCESS':
      return {...state, payload: action.payload, error: null, pending: false, authenticated: true};
    case 'AUTHENTICATION_FAILURE':
      return {...state, payload: action.payload, error: "Authentication failed", pending: false, authenticated: false};
    default: {
      return state;
    }
  }
};
