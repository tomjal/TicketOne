import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './../../../store/createHistory';

import { RoutingMenu } from './../routingMenu';

import DashboardPage from './../../dashboard/dashboardPage';
import AllRoomsPage from './../../rooms/allRoomsPage';

const EmployeeRouting = () => (
  <ConnectedRouter history={history}>
    <div>
      {/*<RoutingMenu />*/}
      <Redirect to="/" />
      {/*<Route exact path="/" component={DashboardPage} />*/}
      <Route path="/" component={AllRoomsPage} />
    </div>
  </ConnectedRouter>
);

export default EmployeeRouting;
