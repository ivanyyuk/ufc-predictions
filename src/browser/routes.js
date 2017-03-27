import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import EventsContainer from './containers/EventsContainer';
import SingleEventContainer from './containers/SingleEventContainer';
import SearchContainer from './containers/SearchContainer';
import FightContainer from './containers/FightContainer';
import { receiveEvents } from './action-creators/events.js';
import { getEventById } from './action-creators/single-event';
import { clearSearchResults } from './action-creators/search';
import { getFightInfo } from './action-creators/fight';
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

const onSearchEnter = () => {
  store.dispatch(clearSearchResults());
};

const onFightEnter = (nextRouterState) => {
  const id1 = nextRouterState.params.id1;
  const id2 = nextRouterState.params.id2;
  store.dispatch(getFightInfo(id1,id2));
};

export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path="search" component={SearchContainer} onEnter={onSearchEnter}/>
          <Route path="events" component={EventsContainer} onEnter={onEventsEnter}/>
          <Route path="events/:id" component={SingleEventContainer} onEnter={onSingleEventEnter}/>
          <Route path="fight/:id1/:id2" component={FightContainer} onEnter={onFightEnter}/>
        </Route>
      </Router>
    </Provider> 
  );
};

