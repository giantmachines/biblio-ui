import * as React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { baseClass } from './_app.scss';
import HomePage from '../HomePage';
import configureStore from '../../configureStore';
import Dialog from "../layout/Dialog";
import LoginForm from "../LoginModal/LoginForm";
import {Header} from "../layout";
// @ts-ignore
import banner from "./Giant-Machines_Logo_BW.svg";
// @ts-ignore
import headshot from "./headshot.svg"
import SVG from 'react-inlinesvg';

const store = configureStore();

const App = () => {
  const [authenticate, setAuthenticate] = React.useState(false);
  const update = () => setAuthenticate(v => !v);
  const show = () => setAuthenticate(v => true);
  const LOGIN_URL = 'https://library-platform-staging.herokuapp.com/login';
  const onSuccess = () => {
    update();
  };
  const onFailure = () => {
    show();
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={baseClass}>
          <Header>
            <Link to="/">
              <SVG src={banner} className="banner" />
            </Link>
            <span className="header-right" onClick={update}>
              <SVG src={headshot} className="headshot" />
              <span className="login">Login</span>
            </span>
          </Header>

          <Dialog visible={authenticate} onClose={update} overlay={true}>
            <LoginForm url={LOGIN_URL}
                       onSuccess={onSuccess}
                       onFailure={onFailure} />
          </Dialog>

          {/*<Link to="/details/1/">to details</Link>*/}

          <Route path="/" exact component={HomePage} />
          {/*<Route path="/details/:id" exact render={() => <DetailsPage counter={counter} />} />*/}
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(App);
