import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

  renderPublic = () => {
    return <div>You are visitor</div>
  }

  renderPrivate = () => {
    return <div>You are logged in</div>
  }
  render() {
    return this.props.authenticated ? this.renderPrivate() : this.renderPublic();
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.get('authenticated')
});

export default connect(mapStateToProps)(HomePage);
