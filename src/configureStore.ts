import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {BookState} from "./redux/books";
import rootReducer from './redux';
import rootSaga from "./redux/sagas";

const isProduction = process.env.NODE_ENV === 'production';
const sagaMiddleware = createSagaMiddleware();

export default (state?: any) => {
  const middleware = applyMiddleware(sagaMiddleware);

  // Middleware enhancers
  const enhancers: StoreEnhancer[] = [];

  if (!isProduction) {
    // eslint-disable-next-line no-underscore-dangle
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      const enhancer = devToolsExtension();

      if (enhancer) {
        enhancers.push(enhancer);
      }
    }
  }

  const middlewareStack: StoreEnhancer = compose(
    middleware,
    ...enhancers,
  );


  const store = createStore(rootReducer, state, middlewareStack);
  sagaMiddleware.run(rootSaga);

  return store;
};



export interface Store {
  me: any;
  books: BookState;
}
