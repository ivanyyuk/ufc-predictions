'use strict';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware);

export default createStore(rootReducer, middleware);
