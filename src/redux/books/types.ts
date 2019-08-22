export interface Me {
  name: string;
}

export interface MeState {
  data: Array<any>;
  authenticated: boolean;
}

export interface BookState {
  books: Array<BookDetails>;
  memento: Array<BookDetails>;
  loading: boolean;
  filter: Function | null
}
