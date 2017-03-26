import { RECEIVE_EVENTS, TOGGLE_FADE } from '../action-creators/events';
import { addFadeProperty } from '../utils';
import _ from 'lodash';

const initialEventsState = [];

export default function (state = initialEventsState, action) {
  switch (action.type) {

    case RECEIVE_EVENTS:
      return [...addFadeProperty(action.events)];

    case TOGGLE_FADE:
      const index = _.findIndex(state, event => event.id === action.eventId);
      const newState = state.slice();
      newState[index].faded = !newState[index].faded;
      return newState;

    default:
      return state;
  }
}
