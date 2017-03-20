import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import EventsContainer from './containers/EventsContainer';
import SingleEvent from './components/SingleEvent';
import Search from './components/Search';
import { receiveEvents } from './action-creators/events.js';
import './index.css';
import axios from 'axios';

const onEventsEnter = () => {
 axios.get('/api/events')
    .then(res => res.data)
    .then(events => store.dispatch(receiveEvents(events)));
};

export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Search} />
        <Route path="events" component={EventsContainer} onEnter={onEventsEnter}/>
        <Route path="events/:id" component={SingleEvent} />
      </Router>
    </Provider> 
  );
};

