
export const fetchAllBooks = () => {
  return {type: 'FETCH_ALL_BOOKS'};
};

export const fetchAllBooksSuccess = (data:any) => {
  return {type: 'FETCH_ALL_BOOKS_SUCCESS', payload: data};
};

export const fetchSelectedBook = (id:number) => {
  return {type: 'FETCH_SELECTED_BOOK', selectedId: id};
};

export const fetchSelectedBookSuccess = (data:any) => {
  return {type: 'FETCH_SELECTED_BOOK_SUCCESS', payload: [data]};
};


export type FetchAllBooks = typeof fetchAllBooks;
export type FetchSelectedBook = typeof fetchSelectedBook;


