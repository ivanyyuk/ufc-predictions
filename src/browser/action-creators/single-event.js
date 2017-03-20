import axios from 'axios';

export const RECEIVE_SINGLE_EVENT = 'RECEIVE_SINGLE_EVENT';

export const receiveSingleEvent = (event) => {
  const action = {
    type: RECEIVE_SINGLE_EVENT,
    name: event.name,
    fights: event.fights
  };
  return action;
};

export const getEventById = (eventId) => {
  return dispatch => {
    axios.get(`/api/events/${eventId}`)
      .then(event => { 
        dispatch(receiveSingleEvent(event.data));
      });
  };
};

