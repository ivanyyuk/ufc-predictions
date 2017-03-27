import React from 'react';
import Fighter from '../components/Fighter';

export default ({ currentFight }) => {
  const record1 = `${currentFight.fighter1.record.wins.total}-${currentFight.fighter1.record.losses.total}-${currentFight.fighter1.record.draws.total}`;
  const record2 = `${currentFight.fighter2.record.wins.total}-${currentFight.fighter2.record.losses.total}-${currentFight.fighter2.record.draws.total}`;
  return ( 
        <div className='single-fight flex flex-column center'>
          <div className='versus-item clearfix border xs-col-8 sm-col-8 md-col-8 mx-auto'>
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

          <div className=' my2 mx-auto '>
            <div className='loader col-6'></div><span className='col-6'>Loading ... </span>
        </div>
        </div>
  );
};

