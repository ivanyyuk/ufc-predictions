import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const autoCompleteStyle = {
  maxHeight:200,
  overflow: 'auto'
};

export default ({handleChange, handleSubmit, searchResults, handleClick, value1, value2, fighter1, fighter2}) => {
  return(
    <div className='search center col col-12 mb2'>
      <h4 className=''>PICK TWO FIGHTERS</h4>
      <h5>Once you have both, hit predict</h5>
      <br />
      <form onSubmit={e => handleSubmit(e,fighter1.id,fighter2.id)}
        className='center' 
      >
        <label className='label'> Type first name, last name or both. <br/>
      Only 3 letters needed to start search.</label>
    <br/>
    <AutoComplete 
      className='search-input'
      listStyle={autoCompleteStyle}
      dataSource={searchResults.f1Results}
      hintText="Fighter 1"
      dataSourceConfig={ {text: 'name', value: 'name'} }
      onUpdateInput={(value, searches, method) => handleChange(value, searches,method ,1)}
      onNewRequest={(val,index) => handleClick(val, index, 1)}
      openOnFocus={!fighter1.id}
      filter={AutoComplete.noFilter}
    />

    <br />

  <AutoComplete 
      className='search-input' 
      listStyle={autoCompleteStyle}
      dataSource={searchResults.f2Results}
      hintText="Fighter 2"
      dataSourceConfig={ {text: 'name', value: 'name'} }
      onUpdateInput={(value, searches, method) => handleChange(value, searches,method ,2)}
      onNewRequest={(val,index) => handleClick(val, index, 2)}
      openOnFocus={!fighter2.id}
      filter={AutoComplete.noFilter}
    />



  <br/>
        <input
          type="submit"
          className={`predict-button btn ${fighter1.id && fighter2.id ? '' : 'disabled'}`}
          value="Predict"
        />
      </form>
    </div>
  );
};

