import * as React from 'react';
import {Route, BrowserRouter, Link, NavLink} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { baseClass } from './_app.scss';
import HomePage from '../HomePage';
import configureStore from '../../configureStore';
import Dialog from "../layout/Dialog";
import LoginForm from "../LoginModal/LoginFormtContainer";
import {Header, Sidebar} from "../layout";
// @ts-ignore
import banner from "./images/Giant-Machines_Logo_BW.svg";
// @ts-ignore
import headshot from "./images/headshot.svg"
// @ts-ignore
import home from "./images/homepage_normal.svg"
// @ts-ignore
import home_checked from "./images/homepage_checked.svg"
// @ts-ignore
import dashboard from "./images/dashboard_normal.svg"
// @ts-ignore
import dashboard_checked from "./images/dashboard_checked.svg"
// @ts-ignore
import settings from "./images/settings_normal.svg"
// @ts-ignore
import settings_checked from "./images/settings_checked.svg"
import SVG from 'react-inlinesvg';
import DetailsPage from "../DetailsPage";
import {authenticationEndpoint} from "../../config";


const store = configureStore();

const App = () => {
  const [authenticate, setAuthenticate] = React.useState(false);
  const update = () => setAuthenticate(v => !v);
  const show = () => setAuthenticate(() => true);
  const onSuccess = () => {
    update();
  };
  const onFailure = () => {
    show();
  };
  const isActive = (match:any, location:any) => {
    return location.pathname === '/' || location.pathname.startsWith('/books/');
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={baseClass}>
          <Header className="header">
            <Link to="/">
              <SVG src={banner} className="banner" />
            </Link>
            <span className="user-container" onClick={update}>
              <SVG src={headshot} />
              <span>Login</span>
            </span>
          </Header>

          <Dialog visible={authenticate}
                  onClose={update}
                  overlay={true}>
            <LoginForm url={authenticationEndpoint}
                       onSuccess={onSuccess}
                       onFailure={onFailure} />
          </Dialog>

          <section className="main">
            <Sidebar>
                <NavLink to="/"
                         isActive={isActive}
                         className="row"
                         activeClassName="row row--selected">
                  <SVG src={home} className="inactive"/>
                  <SVG src={home_checked} className="active"/>
                </NavLink>
                <NavLink to="/dashboard"
                         className="row"
                         activeClassName="row row--selected">
                  <SVG src={dashboard} className="inactive" />
                  <SVG src={dashboard_checked} className="active" />
                </NavLink>
                <NavLink to="/settings"
                         className="row"
                         activeClassName="row row--selected">
                  <SVG src={settings} className="inactive" />
                  <SVG src={settings_checked} className="active" />
                </NavLink>
            </Sidebar>

            <Route path="/" exact component={HomePage} />
            <Route path="/books/:id" exact render={() => <DetailsPage />} />
          </section>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(App);
