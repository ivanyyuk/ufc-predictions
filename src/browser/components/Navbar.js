import { Link, IndexLink } from 'react-router';
import React from 'react';

export default () => {
  return(
    <div>
      <div className='logo row black'>
        <h1 className='center-align'>MY FIGHT PREDICTIONS </h1>
      </div>
      
      <nav className='navbar row black'>
        <div className='nav-wrapper'>
          <div className='row center-align'>
            <ul>
              <li className='col s4'>  <IndexLink to='/'
                  activeClassName='blue'
                >
                  Home
                </IndexLink> 
              </li>

              <li className='col s4'> <Link to='/events'
                  activeClassName='blue'
                >
                  <span className='hide-on-small-only'>Upcoming</span> Events
                </Link>
              </li>

              <li className='col s4'> <Link to='/search'
                  activeClassName='blue'
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
/*
     <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">Logo</a>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li class="active"><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  */
