import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import EventsContainer from './containers/EventsContainer';
import SingleEventContainer from './containers/SingleEventContainer';
import SearchContainer from './containers/SearchContainer';
import { receiveEvents } from './action-creators/events.js';
import { getEventById } from './action-creators/single-event';
import axios from 'axios';

const onEventsEnter = () => {
 axios.get('/api/events')
    .then(res => res.data)
    .then(events => store.dispatch(receiveEvents(events)));
};

const onSingleEventEnter = (nextRouterState) => {
  const eventId = nextRouterState.params.id;
  store.dispatch(getEventById(eventId));
};

export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path="search" component={SearchContainer} />
          <Route path="events" component={EventsContainer} onEnter={onEventsEnter}/>
          <Route path="events/:id" component={SingleEventContainer} onEnter={onSingleEventEnter}/>
        </Route>
      </Router>
    </Provider> 
  );
};

