import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import 'tachyons';
import './index.css';

import App from './containers/App';
import Home from './containers/Home';
import { AUTH_SIGNIN } from './actions';

import rootReducer from './reducers';
console.log(rootReducer)
const store = createStore(rootReducer);

const token = localStorage.getItem('token');

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwqwifc12aj00125zefoavr1'});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // Get the authentication token from local storage if it exists
    req.options.headers.token = token ? token : null;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
})

if (token) {
  // We need to update application state if the token exists
  store.dispatch({ type: AUTH_SIGNIN });
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
