import React, { Component } from 'react';
import Navbar from './Navbar';


export default ({ children }) => {
  return (
    <div className=''>
      <Navbar/>
      <div className='main'>
        {children}
      </div>
    </div>
  );
};

