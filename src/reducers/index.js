import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form/immutable';
import auth from './auth';

export default function getStore(client) {
  const rootReducer = combineReducers({
    auth,
    form,
    apollo: client.reducer(),
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
  return store
}
