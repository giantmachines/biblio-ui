import * as React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import { baseClass } from './_app.scss';

import DetailsPage from '../DetailsPage';
import HomePage from '../HomePage';
import configureStore from '../../configureStore';

const store = configureStore();

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={baseClass}>
          {/* <div>here</div> */}

          <button type="button" onClick={() => setCounter(c => c + 1)}>
            click me {1}
          </button>

          <Link to="/details/1/">to details</Link>

          <Route path="/" exact component={HomePage} />
          <Route path="/details/:id" exact render={() => <DetailsPage counter={counter} />} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(App);
