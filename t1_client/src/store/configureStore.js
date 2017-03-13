import { createStore, applyMiddleware, compose } from 'redux';

import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from './../reducers/rootReducer';

export const appStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
