import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import axios from 'axios';
import { receiveSearchResults, clearSearchResults, setFighter } from '../action-creators/search';
import { browserHistory } from 'react-router';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.timer = null;

    this.state = {
      value1: '',
      value2: ''
    };
  }

  handleSubmit(evt, id1, id2) {
    evt.preventDefault();
    if (id1 && id2) {
      browserHistory.push(`/fight/${id1}/${id2}`);
    }
  }

  handleClick(index, name, id) {
    this.props.setFighter(index, name, id);
    let stateObj = {};
    stateObj[`value${index}`] = name;
    this.setState(stateObj);

  }

  handleChange(value, index) {
    let stateObj = {};
    stateObj[`value${index}`] = value;
    this.setState(stateObj);
    const debounceTimer = 500;
    const minLength = 2;
    clearTimeout(this.timer);
    if (value.length === 0) this.props.clearSearches(index);
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
        value1={this.state.value1}
        value2={this.state.value2}
        fighter1={this.props.searchResults.fighter1}
        fighter2={this.props.searchResults.fighter2}
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
    clearSearches: (index) => {
      dispatch(clearSearchResults(index));
    },
    setFighter: (index, name, id) => {
      dispatch(setFighter(index, name, id));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

