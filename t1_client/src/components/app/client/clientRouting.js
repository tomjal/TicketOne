import React from 'react'
import { Route } from 'react-router';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './../../../store/createHistory';

import DashboardPage from './../../dashboard/dashboardPage';
// eslint-disable-next-line
import RoomsPage from './../../rooms/roomsPage';

const ClientRouting = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={DashboardPage} />
    </div>
  </ConnectedRouter>
);

export default ClientRouting;
