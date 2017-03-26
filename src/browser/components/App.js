import React, { Component } from 'react';
import Navbar from './Navbar';


export default ({ children }) => {
  return (
    <div className='container'>
      <Navbar/>
      <div className='main container clearfix block mt4 relative '>
        {children}
      </div>
    </div>
  );
};

