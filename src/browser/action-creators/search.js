export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const PICK_SEARCH_RESULT = 'PICK_SEARCH_RESULT';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const receiveSearchResults = (searchResults) => {
  const action = {
    type: RECEIVE_SEARCH_RESULTS,
    results: searchResults
  };
  return action;
};

export const pickSearchResult = (result, searchBarIndex) => {
  const action = {
    type: PICK_SEARCH_RESULT,
    result,
    index: searchBarIndex
  };
  return action;
};

export const clearSearchResults = () => {
  const action = {
    type: CLEAR_SEARCH_RESULTS
  };
  return action;
};