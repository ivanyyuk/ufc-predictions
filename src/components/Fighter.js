import React from 'react';

export default ({name, record, weightClass, thumbnailUrl }) => 
  <div className='fighter'>
    <div>
      <img src={thumbnailUrl} />
      <br />
      <span>{name}</span>
      <br />
      <span>{record}</span>
      <br />
      <span>{weightClass}</span>
    </div>
  </div>

