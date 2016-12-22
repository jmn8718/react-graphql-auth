import { fromJS } from 'immutable';

import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from '../actions';

const initialState = fromJS({
  authenticated: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return state.set('authenticated', true);
    case AUTH_LOGOUT:
      return state.set('authenticated', false);
    default:
      return state;
  }
}
