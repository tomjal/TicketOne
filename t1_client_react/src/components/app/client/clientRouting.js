import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from './../../../store/createHistory';

import ClientRoomsPage from './../../rooms/clientRoomsPage';

const ClientRouting = () => (
  <Router history={history}>
    <Route exact path='/' component={ClientRoomsPage} />
  </Router>
);

export default ClientRouting;
