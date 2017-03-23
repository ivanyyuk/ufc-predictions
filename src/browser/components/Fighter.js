import React from 'react';

export default ({firstName, lastName, record, weightClass, imgUrl }) =>  {
  return (
    <div className='fighter col col-6 p2'>
      <p className='center'>{firstName} <br/> {lastName}</p>
        <img className='circle'  src={imgUrl} alt={`${name}`} />
        <h5 className="center">{record}</h5>
    </div>
  );
};
