import React from 'react';

export default ({fights}) => {
  return(
    <div className='slide-from-right'>
      <ul className="fight-list">
        {
          fights.map(fight => (
            <li>{fight}</li>
          ))
        }
      </ul>
    </div>
  );
};
