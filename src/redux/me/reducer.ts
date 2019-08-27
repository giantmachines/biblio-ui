import { MeState } from './types';

interface Action {
  type:string;
  payload?:any;
  formData?:any;
}

const initialState: MeState = {
  user: null,
  authenticated: false
};

export default (state: MeState = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {...state, formData:action.formData};
    case 'AUTHENTICATION_SUCCESS':
      return {...state, payload: action.payload, authenticated: true};
    case 'AUTHENTICATION_FAILURE':
      return {...state, user: null, authenticated: false};
    default: {
      return state;
    }
  }
};
