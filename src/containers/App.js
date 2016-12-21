import React from 'react';

export default ({ children }) => (
  <div className='w-100 bg-light-gray min-vh-100'>
    <div className='flex flex-wrap justify-center center w-75'>
      {children}
    </div>
  </div>
);
