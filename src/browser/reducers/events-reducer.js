import { RECEIVE_EVENTS, FADE_IN, FADE_OUT } from '../action-creators/events';
import { addFadeProperty } from '../utils';
import _ from 'lodash';

const initialEventsState = [];

export default function (state = initialEventsState, action) {
  const newState = state.slice();
  let index;

  switch (action.type) {

    case RECEIVE_EVENTS:
      return [...addFadeProperty(action.events)];

    case FADE_IN:
      index = _.findIndex(state, event => event.id === action.eventId);
      newState[index].faded = true;
      return newState;

      case FADE_OUT:
      index = _.findIndex(state, event => event.id === action.eventId);
      newState[index].faded = false;
      return newState;

    default:
      return state;
  }
}
