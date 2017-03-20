import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import singleEventReducer from './single-event-reducer';

export default combineReducers({
  events: eventsReducer,
  currentEvent: singleEventReducer
});
