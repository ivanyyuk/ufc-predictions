import React from 'react';
import Fighter from '../components/Fighter';
import { Link } from 'react-router';

export default ({ currentEvent }) => {
  return ( 
    <div className='versus-page flex flex-justify flex-wrap px2 py3'>
      {
        currentEvent.fights.map((fight,index) => (
          <div key={index} className='versus-item flex flex-justify border sm-col md-col-6 lg-col-4 center'>
            <Link to={`/fight/${fight[0].id}/${fight[1].id}`} >
              <Fighter firstName={fight[0].first_name} 
                lastName={fight[0].last_name}
                record={`${fight[0].record.wins.total}-${fight[0].record.losses.total}-${fight[0].record.draws.total}`}
                imgUrl={fight[0].image_url}
              />
              <Fighter firstName={fight[1].first_name}
                lastName={fight[1].last_name}
                record={`${fight[1].record.wins.total}-${fight[1].record.losses.total}-${fight[1].record.draws.total}`}
                imgUrl={fight[1].image_url}
              />
            </Link>
          </div>
        ))
      }
    </div>
  );
};

