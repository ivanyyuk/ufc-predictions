import React from 'react';

export default ({name, record, weightClass, imgUrl }) => 
  <div className='fighter'>
    <div>
      <img src={imgUrl} alt={`${name}`} />
      <br />
      <span>{name}</span>
      <br />
      <span>{record}</span>
      <br />
      <span>{weightClass}</span>
    </div>
  </div>;

