import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';

const isProduction = process.env.NODE_ENV === 'production';

export default (state?: any) => {
  const middleware = applyMiddleware();

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

  const store = createStore(() => ({}), state, middlewareStack);

  return store;
};
