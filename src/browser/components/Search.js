import React from 'react';

export default ({handleChange, handleSubmit, searchResults}) => {
  return(
    <div className='container clearfix search flex flex-column center items-center col col-12 mb2'>
      <h2>PICK TWO FIGHTERS</h2>
      <h5>Once you have both, hit predict</h5>
      <br />
      <form onSubmit={handleSubmit}
        className='xs-col-12 md-col-6 center' 
      >
        <label className='label'> Type first name, last name or both</label>
        <input type='text'
          className='input sm-col-10'
          placeholder='Fighter 1' onChange={handleChange} 
        />
        <ul className={`${searchResults.length ? '': 'hide'} center search-dropdown-menu flex flex-column`}>
    {
      searchResults.map(result => (
        <li
          className='list-reset btn'
        key={result.id}>{result.first_name} {result.last_name}</li>

      ))
    }
  </ul>
        <input type='text' 
          className='input block sm-col-10'
          placeholder='Fighter 2' onChange={handleChange} 
        />

      <br />
        <input
          type="submit"
          className='block btn btn-outline center'
          value="Predict"
        />
      </form>
    </div>
  );
};
