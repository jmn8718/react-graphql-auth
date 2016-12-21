import { fromJS } from 'immutable';

import {
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from '../actions';

const initialState = fromJS({
  authenticated: false,
});

export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case AUTH_SIGNIN:
      return state.set('authenticated', true);
    case AUTH_SIGNOUT:
      return state.set('authenticated', false);
    default:
      return state;
  }
}
