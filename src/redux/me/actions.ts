export const authenticate = (formData:any) => {
  return {type: 'AUTHENTICATE', formData:formData};
};

export const authenticationSuccess = (data:UserDetails) => {
  return {type: 'AUTHENTICATION_SUCCESS', payload: data};
};

export type Authenticate = typeof authenticate;