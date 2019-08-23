import * as React from 'react';
import {Route, BrowserRouter, Link, NavLink} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { baseClass } from './_app.scss';
import HomePage from '../HomePage';
import configureStore from '../../configureStore';
import Dialog from "../layout/Dialog";
import LoginForm from "../LoginModal/LoginForm";
import {Header, Sidebar} from "../layout";
// @ts-ignore
import banner from "./Giant-Machines_Logo_BW.svg";
// @ts-ignore
import headshot from "./headshot.svg"
// @ts-ignore
import home from "../layout/homepage_normal.svg"
// @ts-ignore
import dashboard from "../layout/dashboard_normal.svg"
// @ts-ignore
import settings from "../layout/settings_normal.svg"
import SVG from 'react-inlinesvg';

const store = configureStore();

const App = () => {
  const [authenticate, setAuthenticate] = React.useState(false);
  const update = () => setAuthenticate(v => !v);
  const show = () => setAuthenticate(() => true);
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

          <Sidebar align="left">
              <NavLink to="/" exact className="row" activeClassName="row row--selected">
                <SVG src={home}/>
              </NavLink>
              <NavLink to="/dashboard" className="row" activeClassName="row row--selected">
                <SVG src={dashboard}/>
              </NavLink>
              <NavLink to="/settings" className="row" activeClassName="row row--selected">
                <SVG src={settings}/>
              </NavLink>
          </Sidebar>

          <Route path="/" exact component={HomePage} />
          {/*<Route path="/details/:id" exact render={() => <DetailsPage counter={counter} />} />*/}
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(App);
