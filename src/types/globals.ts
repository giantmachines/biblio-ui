import { StoreEnhancer } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: (() => StoreEnhancer) | undefined;
  }

  interface BookDetails {
    [key:string]: any;
    id: number;
    title: string;
    image: string;
    author: string;
    status: string;
    rating: number;
  }

  interface BookListState {
    books: Array<BookDetails>;
    memento: Array<BookDetails>;
  }

  interface FilterType {
    key: string;
    value: string;
  }

}
