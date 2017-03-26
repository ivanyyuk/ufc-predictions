import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import singleEventReducer from './single-event-reducer';
import searchReducer from './search-reducer';

export default combineReducers({
  events: eventsReducer,
  currentEvent: singleEventReducer,
  searchResults: searchReducer
});
