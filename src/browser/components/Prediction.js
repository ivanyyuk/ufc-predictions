import React from 'react';
import CommonOpponentsContainer from '../containers/CommonOpponentsContainer';

export default ({ commonOpponents, result, fighter1, fighter2 }) => {
  if (!result.length) {
    return (
      <div className='card-content'>
        <span className='card-title'>Loading...</span>
      </div>
    );
  } else if (result === 'draw') {
    return (
      <div className='card-content'>
        <span className='center-align'>Not enough info to determine winner.</span>
        <hr />
        <CommonOpponentsContainer
        />
      </div>
    );
  } else {
    return (
      <div className='card-content'>
        <span className='card-title'>Winner: {
          result === 'win' ? `${fighter1.first_name} ${fighter1.last_name}`
            : `${fighter2.first_name} ${fighter2.last_name}`
        } </span>

      <hr />
        <CommonOpponentsContainer
        />
          </div>
    );
  };
};
