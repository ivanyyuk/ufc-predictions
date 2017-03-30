import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

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
    <br/>
    <AutoComplete 
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
          className='block btn btn-outline center'
          value="Predict"
        />
      </form>
    </div>
  );
};

