export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const receiveEvents = (events) => {
  const action = {
    type: RECEIVE_EVENTS,
    events
  };
  return action;
};

