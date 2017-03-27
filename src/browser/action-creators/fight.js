import axios from 'axios';
export const RECEIVE_FIGHT = 'RECEIVE_FIGHT';

export const receiveFight = ({fighter1,fighter2}) => {
  const action = {
    type: RECEIVE_FIGHT,
    fighter1,
    fighter2
  };
  return action;
};

export const getFightInfo = (id1, id2) => {
  return dispatch => {
    axios.get(`/api/fighters/${id1}/${id2}`)
      .then(fighters => { 
        dispatch(receiveFight(fighters.data));
      });
  };
};

