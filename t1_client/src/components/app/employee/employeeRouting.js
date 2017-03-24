import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './../../../store/createHistory';

import { RoutingMenu } from './../routingMenu';

import DashboardPage from './../../dashboard/dashboardPage';
import RoomsPage from './../../rooms/roomsPage';

const EmployeeRouting = () => (
  <ConnectedRouter history={history}>
    <div>
      <RoutingMenu />
      <Route exact path="/" component={DashboardPage} />
      <Route path="/rooms" component={RoomsPage} />
    </div>
  </ConnectedRouter>
);

export default EmployeeRouting;
