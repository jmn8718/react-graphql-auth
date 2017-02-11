import React from 'react';
import { Link } from 'react-router';

const SignUpSuccessPage = (props) => (
  <div className="pa4 black-80 w-75">
    <p>Your account has been created.</p>
    <p>Go to the <Link to={'/login'}>Login</Link> page</p>
  </div>
);

export default SignUpSuccessPage;
