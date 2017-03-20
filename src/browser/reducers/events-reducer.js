import {
  RECEIVE_EVENTS
} from '../action-creators/events';


const initialEventsState = [];

export default function (state = initialEventsState, action) {


  switch (action.type) {

    case RECEIVE_EVENTS:
      return [...state, ...action.events];

    default:
      return state;

  }

}
