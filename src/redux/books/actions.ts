
export const fetchAllBooks = () => {
  return {type: 'FETCH_ALL_BOOKS'};
};

export const fetchAllBooksSuccess = (data:any) => {
  return {type: 'FETCH_ALL_BOOKS_SUCCESS', payload: data};
};

export type FetchAllBooks = typeof fetchAllBooks;


