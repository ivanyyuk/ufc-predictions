import { Link } from 'react-router';
import React from 'react';

export default () => {
  return(
    <div className='container clearfix'>
      <div className='logo col col-12 center'>
        <Link to='/' className='white'>
          <h1 className='white'>UFC FIGHT PREDICTIONS</h1>
        </Link>
      </div>

      <div className="col col-12 flex center nowrap">

        <Link to='/' className='flex-auto btn'>
          Home
        </Link> 

        <Link to='/events' className='flex-auto btn'>
          Upcoming Events
        </Link>

        <Link to='/search' className='flex-auto btn'>
          Search
        </Link>

      </div>
    </div>
  );
};

