import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form/immutable';
import { routerReducer } from 'react-router-redux'

import auth from './auth';
import app from './app';

export default function getStore(client) {
  const rootReducer = combineReducers({
    auth,
    app,
    form,
    apollo: client.reducer(),
    routing: routerReducer,
  });
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  )
  return store;
}
