//import { Action } from 'redux';

import {BookState} from './types';

const initialState: BookState = {
  books: [],
  memento: [],
  loading: false
};


interface Action {
  type: string;
  payload?: any;
  selectedId?:number;
}


export default (state: BookState = initialState, action: Action) => {
  let result;

  switch (action.type) {
    case 'FETCH_ALL_BOOKS':
      result = {...state, loading: true};
      break;
    case 'FETCH_ALL_BOOKS_SUCCESS':
      result = {...state, books: action.payload};
      break;
    case 'FETCH_SELECTED_BOOK':
      console.log('Fetch Book:', action);
      result = {...state, selectedId: action.selectedId, loading: true};
      break;
    case 'FETCH_SELECTED_BOOK_SUCCESS':
      result = {...state, books: action.payload};
      break;
    default: {
      result = state;
    }
  }

  return result;
};
