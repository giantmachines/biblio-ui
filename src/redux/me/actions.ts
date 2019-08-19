import { createAsyncAction } from 'typesafe-actions';

interface Me {
  name: string;
}
/* eslint-disable-next-line import/prefer-default-export */
export const setMe = createAsyncAction('SET_ME_REQUEST', 'SET_ME_SUCCESS', 'SET_ME_FAILURE')<
  Me,
  Me,
  Error
>();
