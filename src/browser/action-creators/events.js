export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const TOGGLE_FADE = 'TOGGLE_FADE';

export const receiveEvents = (events) => {
  const action = {
    type: RECEIVE_EVENTS,
    events
  };
  return action;
};

export const toggleFade = (eventId) => {
  const action = {
    type: TOGGLE_FADE,
    eventId
  };
  return action;
};

