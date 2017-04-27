import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from './../../../store/createHistory';

// eslint-disable-next-line
import DashboardPage from './../../dashboard/dashboardPage';
import AllRoomsPage from './../../rooms/allRoomsPage';

const EmployeeRouting = () => (
  <Router history={history}>
    <div>
      {/*<RoutingMenu />*/}
      {/*<Redirect to='/' />*/}
      {/*<Route exact path='/' component={DashboardPage} />*/}
      <Route path='/' component={AllRoomsPage} />
    </div>
  </Router>
);

export default EmployeeRouting;
