import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from './../../../store/createHistory';

// eslint-disable-next-line
import DashboardPage from './../../dashboard/dashboardPage';
import EmployeeRoomsPage from './../../rooms/employeeRoomsPage';

const EmployeeRouting = () => (
  <Router history={history}>
    <div>
      {/*<RoutingMenu />*/}
      {/*<Redirect to='/' />*/}
      {/*<Route exact path='/' component={DashboardPage} />*/}
      <Route path='/' component={EmployeeRoomsPage} />
    </div>
  </Router>
);

export default EmployeeRouting;
