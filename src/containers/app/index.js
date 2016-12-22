import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NavigationBar from '../../components/NavigationBar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default ({ children }) => (
  <MuiThemeProvider>
    <div className='w-100 bg-light-gray min-vh-100'>
      <NavigationBar />
      <div className='flex flex-wrap justify-center center w-75'>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
);
