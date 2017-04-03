import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import App from './components/App';
import Home from './components/Home';
import EventsContainer from './containers/EventsContainer';
import SearchContainer from './containers/SearchContainer';
import FightContainer from './containers/FightContainer';
import { receiveEvents } from './action-creators/events.js';
import { getEventById } from './action-creators/single-event';
import { clearSearchResults } from './action-creators/search';
import { getFightInfo, clearFight } from './action-creators/fight';
import axios from 'axios';

const onSearchEnter = () => {
  store.dispatch(clearSearchResults());
};

const onFightLeave = () => {
  store.dispatch(clearFight());
};

export default () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path="search" component={SearchContainer} onEnter={onSearchEnter}/>
            <Route path="events" component={EventsContainer} />
            <Route path="fight/:id1/:id2" component={FightContainer}
               onLeave={onFightLeave}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider> 
  );
};

