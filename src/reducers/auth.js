import { fromJS } from 'immutable';

import {
  AUTH_SIGNIN,
  AUTH_LOGOUT,
} from '../actions';

const initialState = fromJS({
  authenticated: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return state.set('authenticated', true);
    case AUTH_LOGOUT:
      return state.set('authenticated', false);
    default:
      return state;
  }
}
