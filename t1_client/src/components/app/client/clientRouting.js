import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import ClientApp, { ClientAppWS } from './clientApp';

const ClientRouting = () => (
  <Router>
    <Route exact path="/" component={ClientAppWS} />
  </Router>
);

export default ClientRouting;
