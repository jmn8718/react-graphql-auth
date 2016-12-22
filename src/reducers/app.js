import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  title: 'Home',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      switch (action.payload.pathname) {
        case '/login':
          return state.set('title', 'Log In');
        case '/logout':
          return state.set('title', 'Log Out');
        case '/signup':
          return state.set('title', 'Sign Up');
        case '/signup-success':
          return state.set('title', 'Sign Up Success');
        default:
          return state.set('title', 'Home');
      }
    default:
      return state;
  }
}
