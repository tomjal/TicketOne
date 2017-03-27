import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './../../../store/createHistory';

import ClientRoomPage from './../../rooms/clientRoomPage';

const ClientRouting = () => (
  <ConnectedRouter history={history}>
    <div>
      <Redirect to="/" />
      <Route exact path="/" component={ClientRoomPage} />
    </div>
  </ConnectedRouter>
);

export default ClientRouting;
