import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './browser/store';
import App from './browser/App';
import SingleEvent from './browser/components/SingleEvent';
import './browser/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="events/:id" component={SingleEvent} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
