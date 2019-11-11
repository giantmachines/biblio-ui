import * as cache from "localforage";

export const authenticate = (formData:any) => {
  return {type: 'AUTHENTICATE', formData:formData};
};

export const authenticationSuccess = (data:UserDetails) => {
  //cache.setItem("authorization", );
  return {type: 'AUTHENTICATION_SUCCESS', payload: data};
};

export type Authenticate = typeof authenticate;
