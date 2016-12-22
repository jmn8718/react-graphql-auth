import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
      Home
      is autheticated?? {this.props.authenticated ? 'YES' : 'NO'}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.get('authenticated')
});

export default connect(mapStateToProps)(HomePage);
