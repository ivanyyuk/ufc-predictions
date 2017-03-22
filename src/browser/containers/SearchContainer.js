import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import axios from 'axios';
import { receiveSearchResults, clearSearchResults } from '../action-creators/search';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timer = null;
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleChange(evt) {
    const value = evt.target.value;
    const debounceTimer = 500;
    const minLength = 2;
    clearTimeout(this.timer);
    if (value.length === 0) this.props.clearSearches();
    this.timer = setTimeout(() => {
      if (value.length > minLength) {
        this.triggerFetch(value);
      }
    }, debounceTimer);
  }

  triggerFetch(searchText) {
    axios.post('/api/search', {
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
        searchResults={this.props.searchResults}
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
    },
    clearSearches: () => {
      dispatch(clearSearchResults());
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

