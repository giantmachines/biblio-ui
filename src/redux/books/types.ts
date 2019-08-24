export interface Me {
  name: string;
}

export interface MeState {
  data: Array<any>;
  authenticated: boolean;
  authorization: string;
}

export interface BookState {
  books: Array<BookDetails>;
  selectedBook: BookDetails;
  memento: Array<BookDetails>;
  loading: boolean;
  filter: Function | null
}
