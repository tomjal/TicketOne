import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { appStore } from './store/configureStore';
import IndexApp from './components/app/indexApp.js';

import './styles/index.css';
import './styles/app.css';
import './styles/room.css';
import './styles/widget.css';
import './styles/websocket.css';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={appStore}>
    <IndexApp />
  </Provider>,
  document.getElementById('root')
);
