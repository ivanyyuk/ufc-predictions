import React from 'react';

export default ({handleChange, handleSubmit, searchResults}) => {
  return(
    <div className='container clearfix search flex flex-row center items-center col col-12'>
      <form onSubmit={handleSubmit}>
        <input type='text'
          className='input-reset center ba b--black-20 pa2 mb2 db w-90'
          placeholder='Fighter 1' onChange={handleChange} 
        />
        <ul className='results list tl'>
        {
          searchResults.map(result => (
            <li key={result.id}>{result.first_name} {result.last_name}</li>
          ))
        }
      </ul>
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
