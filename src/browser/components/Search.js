import React from 'react';

export default ({handleChange, handleSubmit}) => {
  return(
    <div className='tc'>
      <form onSubmit={handleSubmit}>
        <input type='text'
          className='input-reset center ba b--black-20 pa2 mb2 db w-90'
          placeholder='Fighter 1' onChange={handleChange} 
        />
        <input type='text' 
          className='input-reset center ba b--black-20 pa2 mb2 db w-90'
          placeholder='Fighter 2' onChange={handleChange} 
        />

        <input
          type="submit"
          className="f6 link br-pill ba bw1 ph3 pv2 dib navy"
          value="Predict"
        />
      </form>
    </div>
  );
};
