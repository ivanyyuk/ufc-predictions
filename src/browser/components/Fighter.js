import React from 'react';

export default ({firstName, lastName, record, weightClass, imgUrl }) =>  {
  return (
    <div className='fighter col s6'>
      <p className='center'>{firstName} <br/> {lastName}</p>
        <img className='circle'  src={imgUrl} alt={`${name}`} />
        <h5 className="center">{record}</h5>
    </div>
  );
};
