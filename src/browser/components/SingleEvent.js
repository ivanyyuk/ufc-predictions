import React from 'react';
import ReactSwipe from 'react-swipe';
import Fighter from '../components/Fighter';

export default ({ currentEvent }) => {
  return ( 
    <ReactSwipe key={currentEvent.fights.length} swipeOptions={{continuos: true}}>
      {
        currentEvent.fights.map((fight,index) => (
          <div key={index} className='versus-page'>
            <Fighter name={`${fight[0].name.first} ${fight[0].name.last}`}
              record={`${fight[0].record.wins.total}-${fight[0].record.losses.total}-${fight[0].record.draws.total}`}
              imgUrl={fight[0].image_url} />
            <Fighter name={`${fight[1].name.first} ${fight[1].name.last}`}
              record={`${fight[1].record.wins.total}-${fight[1].record.losses.total}-${fight[1].record.draws.total}`}
              imgUrl={fight[1].image_url} />
          </div>
        ))
      }
    </ReactSwipe>
  );
};

