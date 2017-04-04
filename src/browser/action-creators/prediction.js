import axios from 'axios';

export const RECEIVE_PREDICTION = 'RECEIVE_PREDICTION';
export const CLEAR_PREDICTION = 'CLEAR_PREDICTION';

export const receivePrediction = (prediction) => {
  const action = {
    type:RECEIVE_PREDICTION,
    prediction
  };
  return action;
};

export const getPredictionFromServer = (id1, id2)  => {
  return dispatch => {
    axios.get(`/api/fighters/predict?fighter1=${id1}&fighter2=${id2}`)
      .then(res => res.data)
      .then(prediction => dispatch(receivePrediction(prediction)));
  };
};

export const clearPrediction = () => {
  const action = {
    type: CLEAR_PREDICTION
  };
  return action;
};
