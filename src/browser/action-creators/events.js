export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const FADE_IN = 'FADE_IN';
export const FADE_OUT = 'FADE_OUT';

export const receiveEvents = (events) => {
  const action = {
    type: RECEIVE_EVENTS,
    events
  };
  return action;
};

export const fadeIn = (eventId) => {
  const action = {
    type: FADE_IN,
    eventId
  };
  return action;
};

export const fadeOut = (eventId) => {
  const action = {
    type: FADE_OUT,
    eventId
  };
  return action;
};
