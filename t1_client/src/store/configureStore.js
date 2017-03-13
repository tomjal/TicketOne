import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from './../reducers/rootReducer';

import { history } from './createHistory';
const historyMiddleware = routerMiddleware(history);

export const appStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk, historyMiddleware, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
