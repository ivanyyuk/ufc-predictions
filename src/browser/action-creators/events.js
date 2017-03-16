export const LOAD_EVENT = 'LOAD_EVENT';

export const loadEvent = function (eventId) {
  const action = {
    type: LOAD_EVENT,
    eventId
  };
  return action;
};
