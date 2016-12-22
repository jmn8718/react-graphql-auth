import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import 'tachyons';
import './index.css';

import App from './containers/app';
import HomePage from './containers/homePage';
import LogInPage from './containers/logInPage';
import LogOutPage from './containers/logOutPage';
import SignUpPage from './containers/signUpPage';
import SignUpSuccessPage from './containers/signUpSuccessPage';

import {
  logIn,
} from './actions';

import getStore from './reducers';

const token = localStorage.getItem('token');

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwqwie9x2agt0125xzn8vhov'});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    if (token) {
      // Get the authentication token from local storage if it exists
      req.options.headers.token = `Bearer ${token}`;
    }
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
})

const store = getStore(client)

if (token) {
  // We need to update application state if the token exists
  store.dispatch(logIn(token));
}

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="signup" component={SignUpPage}/>
        <Route path="signup-success" component={SignUpSuccessPage}/>
        <Route path="login" component={LogInPage}/>
        <Route path="logout" component={LogOutPage}/>
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
