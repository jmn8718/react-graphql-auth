import React from 'react';
import { Link } from 'react-router';

const SignUpSuccessPage = (props) => (
  <div className="pa4 black-80">
    <div className="f1 fl w-100 tc">
      Sign Up Success
    </div>
    <p>Your account has been created.</p>
    <p>Go to the <Link to={'/login'}>Login</Link> page</p>
  </div>
);

export default SignUpSuccessPage;
