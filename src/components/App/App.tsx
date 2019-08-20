import * as React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import { baseClass } from './_app.scss';

import DetailsPage from '../DetailsPage';
import HomePage from '../HomePage';
import configureStore from '../../configureStore';
import Dialog from "../layout/Dialog";
import LoginForm from "../LoginModal/LoginForm";

const store = configureStore();

const App = () => {
  const [authenticate, setAuthenticate] = React.useState(false);
  const update = () => setAuthenticate(v => !v);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={baseClass}>
          {/* <div>here</div> */}
          <button onClick={update}>Login</button>
          <button onClick={update}>Checkout</button>
          <button onClick={update}>Review</button>

          <Dialog visible={authenticate} onClose={update}>
            <LoginForm />
          </Dialog>

          <Link to="/details/1/">to details</Link>

          <Route path="/" exact component={HomePage} />
          {/*<Route path="/details/:id" exact render={() => <DetailsPage counter={counter} />} />*/}
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(App);
