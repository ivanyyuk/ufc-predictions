import { RECEIVE_PREDICTION, CLEAR_PREDICTION } from '../action-creators/prediction';

const initialPredictionState = {
  commonOpponents: [],
  result: ''
};


export default (state = initialPredictionState, action) => {
  switch(action.type){
    case (RECEIVE_PREDICTION):
      return Object.assign({},state,action.prediction);

    case (CLEAR_PREDICTION):
      return Object.assign({}, initialPredictionState);

    default:
      return state;
  };
};
