import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NavigationBar from '../../components/NavigationBar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    const { children, authenticated, title } = this.props;
    console.log(authenticated)
    return (
      <MuiThemeProvider>
        <div className='w-100 bg-light-gray min-vh-100'>
          <NavigationBar authenticated={authenticated} title={title}/>
          <div className='flex flex-wrap justify-center center w-75'>
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.get('authenticated'),
  title: state.app.get('title'),
});

export default connect(mapStateToProps)(App);
