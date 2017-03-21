import { Link } from 'react-router';
import React from 'react';

export default () => {
  return(
    <nav className="pa3 pa4-ns">

      <Link to='/' className='link black b f1 f-headline-ns tc db mb3 mb4-ns'>
        UFC Fight Predictions
      </Link>

      <div className="tc pb3">

        <Link to='/' className='link dim gray f6 f5-ns dib mr3'>
          Home
        </Link> 

        <Link to='events' className='link dim gray f6 f5-ns dib mr3'>
          Upcoming Events
        </Link>

        <Link to='search' className='link dim gray f6 f5-ns dib mr3'>
          Search
        </Link>
        
      </div>
    </nav>
  );
};

