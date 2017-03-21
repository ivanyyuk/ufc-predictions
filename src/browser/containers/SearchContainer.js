import React, { Component } from 'react';
import Search from '../components/Search';
import axios from 'axios';


class SearchContainer extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timer = null; 
    this.state = { matches: [] };
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleChange(evt){
    const value = evt.target.value;
    const debounceTimer = 500;
    const minLength = 2;
    clearTimeout(this.timer);
    console.log(value);
    this.timer = setTimeout(() => {
      if (value.length < minLength){
        this.setState({ matches: [] });
      } else {
        this.triggerFetch(value);
      }
    }, debounceTimer);
  }

  triggerFetch(searchText){
    axios.post('/api/search',{
      searchText
    })
      .then(matches => {
        this.setState({matches: matches.data});
      })
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

export default SearchContainer;
