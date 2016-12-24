import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logOut } from '../../actions';

class LogOutPage extends Component {
  componentWillMount() {
    this.props.logOutDispatcher();
  }

  render() {
    return (
      <div className="pa4 black-80 w-75">
        <p>You have been logged out successfully.</p>
        <p>Go to the <Link to={'/login'}>Login</Link> page</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOutDispatcher() {
    dispatch(logOut());
  }
});

export default connect(null, mapDispatchToProps)(LogOutPage);
