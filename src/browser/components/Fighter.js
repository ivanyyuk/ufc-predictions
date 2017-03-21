import React from 'react';

export default ({name, record, weightClass, imgUrl }) =>  {
  return (
    <div className='fighter fl w-40 tc'>
      <div>
        <img className='db'  src={imgUrl} alt={`${name}`} />
        <dl className="mt2 f6 lh-copy">
          <dd className="ml0 fw9">{name}</dd>
          <dd className="ml0 gray">{record}</dd>
          <dd className="ml0 gray">{weightClass}</dd>
        </dl> 
      </div>
    </div>
  );
};

