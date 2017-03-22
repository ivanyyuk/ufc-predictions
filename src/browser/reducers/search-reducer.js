import {
  RECEIVE_SEARCH_RESULTS,
  PICK_SEARCH_RESULT,
  CLEAR_SEARCH_RESULTS
} from '../action-creators/search';

const initialSearchState = [];

export default (state = initialSearchState, action) => {

  switch (action.type) {

    case (RECEIVE_SEARCH_RESULTS):
      return [...action.results];

    case (CLEAR_SEARCH_RESULTS):
      return [];

    default:
      return state;
  };
};


