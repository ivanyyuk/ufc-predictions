import { Link, IndexLink } from 'react-router';
import React from 'react';

export default () => {
  return(
    <div className='navbar'>
    <div className='logo row black center-align'>
      <div className='col s12'>
        <Link to='/'>
          <h1>UFC FIGHT PREDICTIONS</h1>
        </Link>
      </div>

    </div>
      <div className='nav-buttons row'>

          <IndexLink to='/'
            activeClassName='black'
            className='btn col s4'>
            Home
          </IndexLink> 

          <Link to='/events'
            activeClassName='black'
            className='col s4 btn'>
            Upcoming Events
          </Link>

          <Link to='/search'
            activeClassName='black'
            className='col s4 btn'>
            Search
          </Link>

      </div>
      </div>
  );
};

