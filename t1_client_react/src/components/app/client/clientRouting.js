import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from './../../../store/createHistory';

import ClientRoomPage from './../../rooms/clientRoomPage';

const ClientRouting = () => (
  <Router history={history}>
    <div>
      {/*<Redirect to='/' />*/}
      <Route exact path='/' component={ClientRoomPage} />
    </div>
  </Router>
);

export default ClientRouting;
