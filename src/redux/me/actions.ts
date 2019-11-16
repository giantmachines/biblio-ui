export const authenticate = (formData:any) => {
  return {type: 'AUTHENTICATE', formData:formData};
};

export const authenticationSuccess = (data:UserDetails) => {
  return {type: 'AUTHENTICATION_SUCCESS', payload: data};
};

export const authenticationFailure = (response:any) => {
  return {type: 'AUTHENTICATION_FAILURE', payload: response || "Authentication failed."};
};

export const invalidate = () => {
   return {type: 'INVALIDATE'};
};

export type Authenticate = typeof authenticate;
export type Invalidate = typeof invalidate;
