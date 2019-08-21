export interface Me {
  name: string;
}

export interface MeState {
  data: Array<any>;
  authenticated: boolean;
}

export interface BookState {
  books: Array<any>;
  memento: Array<any>;
  loading: boolean;
}
