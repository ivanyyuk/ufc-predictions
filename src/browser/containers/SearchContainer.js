import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import axios from 'axios';
import { receiveSearchResults, clearSearchResults, setFighter } from '../action-creators/search';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.timer = null;
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleClick(index, name, id) {
    this.props.setFighter(index, name, id);
  }

  handleChange(evt) {
    const index = evt.target.placeholder.slice(-1);
    const value = evt.target.value;
    const debounceTimer = 500;
    const minLength = 2;
    clearTimeout(this.timer);
    if (value.length === 0) this.props.clearSearches();
    this.timer = setTimeout(() => {
      if (value.length > minLength) {
        this.triggerFetch(value, index);
      }
    }, debounceTimer);
  }

  triggerFetch(searchText, index) {
    axios.post('/api/search', {
      searchText
    })
      .then(matches => this.props.receiveSearch(matches.data, index))
      .catch(console.error);
  }

  render() {
    return (
      <Search
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        searchResults={this.props.searchResults}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  searchResults: state.searchResults,
  fighter1: state.fighter1,
  fighter2: state.fighter2

});

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSearch: (results, index) => {
      dispatch(receiveSearchResults(results, index));
    },
    clearSearches: () => {
      dispatch(clearSearchResults());
    },
    setFighter: (index, name, id) => {
      dispatch(setFighter(index, name, id));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

