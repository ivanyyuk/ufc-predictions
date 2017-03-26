import { Link, IndexLink } from 'react-router';
import React from 'react';

export default () => {
  return(
    <div className='container clearfix fixed relative top-0 left-0 right-0 z2 block bg-black'>
      <div className='logo col col-12 center'>
        <Link to='/' className='btn'>
          <h1 className='white'>UFC FIGHT PREDICTIONS</h1>
        </Link>
      </div>

      <div className="col col-12 flex center nowrap white">

        <IndexLink to='/'
          activeClassName='btn-primary'
          className='flex-auto btn'>
          Home
        </IndexLink> 

        <Link to='/events'
          activeClassName='btn-primary'
          className='flex-auto btn'>
          Upcoming Events
        </Link>

        <Link to='/search'
          activeClassName='btn-primary'
          className='flex-auto btn'>
          Search
        </Link>

      </div>
    </div>
  );
};

