import React from 'react';
import { Link } from 'react-router';

const LogInPage = (props) => (
  <div className="pa4 black-80">
    <div className="f1 fl w-100 tc">
      Log In
    </div>
    <p>If you do not an account, go to the <Link to={'/signup'}>Sign Up</Link> page</p>
  </div>
);

export default LogInPage;
