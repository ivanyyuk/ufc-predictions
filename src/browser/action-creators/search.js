export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (searchResults) => {
  const action = {
    type: RECEIVE_SEARCH_RESULTS,
    results: searchResults
  };
  return action;
};
