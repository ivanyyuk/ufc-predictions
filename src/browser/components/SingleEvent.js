import React from 'react';
import Fighter from '../components/Fighter';

export default ({ currentEvent }) => {
  return ( 
    <div>
      {
        currentEvent.fights.map((fight,index) => (
          <div key={index} className='versus-page center fl w-100 w-40-m w-25-ns pa2 br2 b--gray ba'>
            <Fighter name={`${fight[0].first_name} ${fight[0].last_name}`}
              record={`${fight[0].record.wins.total}-${fight[0].record.losses.total}-${fight[0].record.draws.total}`}
              imgUrl={fight[0].image_url} />
            <Fighter name={`${fight[1].first_name} ${fight[1].last_name}`}
              record={`${fight[1].record.wins.total}-${fight[1].record.losses.total}-${fight[1].record.draws.total}`}
              imgUrl={fight[1].image_url} />
          </div>
        ))
      }
      </div>
  );
};

