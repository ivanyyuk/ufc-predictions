import { RECEIVE_SEARCH_RESULTS } from '../action-creators/search';

const initialSearchState = [];

export default (state = initialSearchState, action) => {

  switch (action.type) {

    case(RECEIVE_SEARCH_RESULTS):
      return [...action.results];

    default: 
      return state;
  };
};


