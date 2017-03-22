import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import axios from 'axios';
import { receiveSearchResults } from '../action-creators/search';


class SearchContainer extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timer = null; 
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleChange(evt){
    const value = evt.target.value;
    const debounceTimer = 500;
    const minLength = 2;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (value.length > minLength){
        this.triggerFetch(value);
      }
    }, debounceTimer);
  }

  triggerFetch(searchText){
    axios.post('/api/search',{
      searchText
    })
      .then(matches => this.props.receiveSearch(matches.data))
      .catch(console.error);
  }

  render() {
    return (
      <Search 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
 searchResults: state.searchResults 
});

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSearch: (results) => {
      dispatch(receiveSearchResults(results));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

