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
    description: string;
    publisher: string;
    available: boolean;
    rating: number;
    reviews?: Array<ReviewDetails>;
  }

  interface ReviewDetails {
    rating: number;
    comment: string;
    user: UserDetails;
    dateReviewed: Date;
  }

  interface UserDetails {
    image: string;
    name: string;
  }

  interface BookCriteria {
    id?: number;
    title?: string;
    author?: string;
    description?: string;
    publisher?: string;
    available: boolean;
    reviewer?: string;
    userId?: string;
  }
}
