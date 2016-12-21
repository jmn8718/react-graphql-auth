import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props.auth)
    return (
      <div>
      Home
      is autheticated?? {this.props.authenticated ? 'YES' : 'NO'}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  authenticated: state.auth.get('authenticated')
});

export default connect(mapStateToProps)(Home);
