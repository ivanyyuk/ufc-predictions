import React, { Component } from 'react';
import Navbar from './Navbar';


export default ({ children }) => {
  return (
    <div className='container'>
        <Navbar/>
        {children}
    </div>
  );
};

