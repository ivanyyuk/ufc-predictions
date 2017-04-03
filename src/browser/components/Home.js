import React from 'react';

export default () => {
  return(
    <div className='container flow-text'>
      
      <p>This is a work in progress
        and is far from done. As of now there are no actual predictions
        but that is the next thing to be updated.</p>

      <p>Click on upcoming events to see what's coming up.</p>
      <p>If you are on a narrow display click the events to be taken
        to all the fights for that event.</p>
      <p>If on a wide display (desktop) you can hover over each event and
        see the fights on the right. </p>
      <p>Or go to the search page and choose your own fighters. </p>

      <p>This is only as accurate as the  
      <a href='http://ufc-data-api.ufc.com/api/v3/iphone/'> UFC Data API</a> that
      I scrape from, so some stats and pictures might be missing. 
    Especially for inactive fighters.</p>
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
