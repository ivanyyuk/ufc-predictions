import React from 'react';
import Fighter from '../components/Fighter';

export default ({ currentFight }) => {
  const record1 = `${currentFight.fighter1.record.wins.total}-${currentFight.fighter1.record.losses.total}-${currentFight.fighter1.record.draws.total}`;
  const record2 = `${currentFight.fighter2.record.wins.total}-${currentFight.fighter2.record.losses.total}-${currentFight.fighter2.record.draws.total}`;
  return ( 
    <div className='single-fight container'>
      <div className='row'>
        <div className='card  darken-1 col s12 l5'>
          <Fighter firstName={currentFight.fighter1.first_name} 
            lastName={currentFight.fighter1.last_name}
            record={record1}
            imgUrl={currentFight.fighter1.image_url}
          />
          <Fighter firstName={currentFight.fighter2.first_name}
            lastName={currentFight.fighter2.last_name}
            record={record2}
            imgUrl={currentFight.fighter2.image_url}
          />
        </div>
        <div className='fight-splitter hide-on-med-and-down col l1'></div>

      <div className='card col s12 l5 center-align'>
        <div className='loader'></div><span className='center-align'>Loading ... </span>
      </div>
    </div>
  </div>
  );
};
