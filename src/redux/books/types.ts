
export interface BookState {
  books: Array<BookDetails>;
  selectedBook: BookDetails;
  memento: Array<BookDetails>;
  loading: boolean;
  filter: Function | null
}
