import _ from 'lodash';
import {
  RECEIVE_SEARCH_RESULTS,
  PICK_SEARCH_RESULT,
  CLEAR_SEARCH_RESULTS,
  SET_FIGHTER
} from '../action-creators/search';

const initialSearchState = {
  f1Results: [],
  f2Results: [],
  fighter1: { name: '', id: 0},
  fighter2: { name: '', id: 0}
};

export default (state = initialSearchState, action) => {

  //have to use lodash here because Object.assign doesn't deep clone
  const newState =  _.cloneDeep(state);

  switch (action.type) {

    case (RECEIVE_SEARCH_RESULTS):
      let key = `f${action.index}Results`;
      let fKey = `fighter${action.index}`;
      newState[fKey].name = '';
      newState[fKey].id = 0;
      newState[key] = [...action.results];
      return newState;

    case (CLEAR_SEARCH_RESULTS):
      if (!action.index) return Object.assign({}, initialSearchState);
       
      else newState[`f${action.index}Results`] = [];
      return newState;
      

    case (SET_FIGHTER):
      let resultsKey = `f${action.index}Results`;
      let fighterKey = `fighter${action.index}`;
      newState[resultsKey] = [];
      newState[fighterKey].name = action.name;
      newState[fighterKey].id = action.id;
      return newState;

    default:
      return state;
  };
};


