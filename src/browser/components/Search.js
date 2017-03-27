import React from 'react';

export default ({handleChange, handleSubmit, searchResults, handleClick, value1, value2, fighter1, fighter2}) => {
  return(
    <div className='container clearfix search flex flex-column center items-center col col-12 mb2'>
      <h2>PICK TWO FIGHTERS</h2>
      <h5>Once you have both, hit predict</h5>
      <br />
      <form onSubmit={e => handleSubmit(e,fighter1.id,fighter2.id)}
        className='xs-col-12 md-col-6 center' 
      >
        <label className='label'> Type first name, last name or both. <br/>
      Only 3 letters needed to start search.</label>
        <input type='text'
          className='input sm-col-10'
          value={value1}
          placeholder='Fighter 1' onChange={ e => handleChange(e,1)} 
        />
        <ul className={`${searchResults.f1Results.length ? '': 'hide'} center search-dropdown-menu flex flex-column`}>
    {
      searchResults.f1Results.map(result => (
        <li
          className='list-reset btn '
          key={result.id}
          onClick={() => handleClick(1, `${result.first_name} ${result.last_name}`, result.id)} 
          >{result.first_name} {result.last_name}</li>

      ))
    }
  </ul>
        <input type='text' 
          className='input block sm-col-10'
          placeholder='Fighter 2' onChange={e => handleChange(e,2)} 
          value={value2}
        />
        <ul className={`${searchResults.f2Results.length ? '': 'hide'} center search-dropdown-menu flex flex-column p2`}>
    {
      searchResults.f2Results.map(result => (
        <li
          className='list-reset btn'
          key={result.id}
          onClick={() => handleClick(2,`${result.first_name} ${result.last_name}`, result.id)} 
          >{result.first_name} {result.last_name}</li>

      ))
    }
  </ul>

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
