import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div className='container flow-text'>
      
      <p>This is a work in progress
        and is far from done. 
      </p>
      <p>This is only as accurate as the  
        <a href='http://ufc-data-api.ufc.com/api/v3/iphone/'> UFC Data API</a> that
    I scrape from, so some stats and pictures might be missing. 
    Especially for inactive fighters.</p>

      <p> So far all we can do is predict a winner based on whether both fighters
        fought the same opponent. I am constantly updating the engine, so check back soon
        for more.</p>

      <p>Click on <Link to='/events'>upcoming events</Link> to see what's coming up.</p>
      <p>If on a wide display (desktop) you can hover over each event and
        see the fights on the right. </p>
      <p>Or go to the search page and choose your own fighters. </p>

      <p><b>Note:</b> If you are on limited data be warned that the pictures used
        here are fairly large and browsing this site can use 10MB or more. 
      </p>

  <br/>
  <p>Check out the source code <a href="https://github.com/ivanyyuk/ufc-predictions"> here.</a></p>
  <br/> 
  <p className=''>Built with React, Redux, Node.js, MongoDB,  
    <a href='http://www.material-ui.com/#/components/auto-complete'> Material-UI</a>,
    and <a href='http://materializecss.com/'>Materialize CSS</a>.
      All pictures and fight data propery of the UFC.
    </p>
    </div>
  );
};
