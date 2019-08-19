import { Action } from 'redux';

import { MeState } from './types';

const initialState: MeState = {
  info: null,
};

export default (state: MeState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
