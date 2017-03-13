import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { appStore } from './store/configureStore';
import IndexApp from './components/app/indexApp.js';

import './styles/index.css';
import './styles/indexApp.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';

ReactDOM.render(
  <Provider store={appStore}>
    <IndexApp />
  </Provider>,
  document.getElementById('root')
);
