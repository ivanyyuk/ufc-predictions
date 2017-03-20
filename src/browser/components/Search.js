import React from 'react';

export default ({handleChange, handleSubmit}) => {
  return(
    <div>
      <form onSubmit={handleChange}>
      <input type='text' placeHolder='Fighter 1' onChange={handleChange} />
      <input type='text' placeHolder='Fighter 2' onChange={handleChange} />
      <button type='submit'>Show me the winner </button>
    </form>
    </div>
  );
};
