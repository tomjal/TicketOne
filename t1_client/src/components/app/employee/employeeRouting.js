import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { history } from './../../../store/createHistory';

// eslint-disable-next-line
import DashboardPage from './../../dashboard/dashboardPage';
import AllRoomsPage from './../../rooms/allRoomsPage';

const EmployeeRouting = () => (
  <HashRouter history={history}>
    <div>
      {/*<RoutingMenu />*/}
      {/*<Redirect to='/' />*/}
      {/*<Route exact path='/' component={DashboardPage} />*/}
      <Route path='/' component={AllRoomsPage} />
    </div>
  </HashRouter>
);

export default EmployeeRouting;
