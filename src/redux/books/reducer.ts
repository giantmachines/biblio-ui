
import {BookState} from './types';

const initialState: BookState = {
  books: [],
  memento: [],
  loading: false,
  filter: null,
  selectedBook: {} as BookDetails
};


interface Action {
  type: string;
  payload?: any;
  selectedId?:number;
  filter?:Function | null;
}


export default (state: BookState = initialState, action: Action) => {
  let result;

  switch (action.type) {
    case 'SEARCH_BOOKS':
    case 'FETCH_REVIEWED_BOOKS':
    case 'FETCH_ALL_BOOKS':
      result = {...state, loading: true};
      break;
    case 'FETCH_ALL_BOOKS_SUCCESS':
      result = {...state, books: action.payload};
      break;
    case 'FETCH_SELECTED_BOOK':
      result = {...state, selectedId: action.selectedId, loading: true};
      break;
    case 'FETCH_SELECTED_BOOK_SUCCESS':
      result = {...state, selectedBook: action.payload};
      break;
    default: {
      result = state;
    }
  }

  return result;
};
