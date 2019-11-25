
export const fetchAllBooks = () => {
  return {type: 'FETCH_ALL_BOOKS'};
};

export const fetchAllBooksSuccess = (data:Array<BookDetails>) => {
  return {type: 'FETCH_ALL_BOOKS_SUCCESS', payload: data};
};

export const fetchSelectedBook = (id:number) => {
  return {type: 'FETCH_SELECTED_BOOK', selectedId: id};
};

export const fetchSelectedBookSuccess = (data:BookDetails) => {
  return {type: 'FETCH_SELECTED_BOOK_SUCCESS', payload: data};
};

export const fetchReviewedBooks = (id: number) => {
  return {type: 'FETCH_REVIEWED_BOOKS', id};
};

export const searchBooks = (criteria: BookCriteria) => {
  return {type: 'FETCH_REVIEWED_BOOKS', criteria};
};


export type FetchAllBooks = typeof fetchAllBooks;
export type FetchSelectedBook = typeof fetchSelectedBook;
export type FetchReviewedBooks = typeof fetchReviewedBooks;
export type SearchBooks = typeof searchBooks;


