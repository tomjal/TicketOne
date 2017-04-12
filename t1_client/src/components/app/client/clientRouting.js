import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { history } from './../../../store/createHistory';

import ClientRoomPage from './../../rooms/clientRoomPage';

const ClientRouting = () => (
  <HashRouter history={history}>
    <div>
      {/*<Redirect to='/' />*/}
      <Route exact path='/' component={ClientRoomPage} />
    </div>
  </HashRouter>
);

export default ClientRouting;
