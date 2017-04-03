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

    //this.state = {
      //value1: '',
      //value2: ''
    //};
  }

  handleSubmit(evt, id1, id2) {
    evt.preventDefault();
    if (id1 && id2) {
      browserHistory.push(`/fight/${id1}/${id2}`);
    }
  }

  handleClick(fighter, index, formIndex ) {
    //index is -1 when user hits enter.  we want to disallow that
    //only search when user picks result
    if (index > -1)
      this.props.setFighter(formIndex, fighter.name, fighter.id);

  }

  handleChange(value, searchRes, method ,index) {
    //ok so when clicked on a result method is
    //{source: 'touchTap'}
    //when typing stuff method is {source: 'change'}
    //so when we touchtap we dont't want to search anymore
    if (method.source==='change') {
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

