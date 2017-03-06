import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import SingleEvent from './components/SingleEvent';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="events/:id" component={SingleEvent} />
  </Router>,
  document.getElementById('root')
);
