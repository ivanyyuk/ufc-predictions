export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const PICK_SEARCH_RESULT = 'PICK_SEARCH_RESULT';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const SET_FIGHTER = 'SET_FIGHTER';

export const receiveSearchResults = (results, index) => {
  const action = {
    type: RECEIVE_SEARCH_RESULTS,
    results,
    index
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

export const setFighter = (index, name, id) => {
  const action = {
    type: SET_FIGHTER,
    index,
    name,
    id
  };

  return action;
};
