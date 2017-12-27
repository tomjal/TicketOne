import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from './../../../store/createHistory';

import EmployeeRoomsPage from './../../rooms/employeeRoomsPage';

const EmployeeRouting = () => (
  <Router history={history}>
    <Route path='/' component={EmployeeRoomsPage} />
  </Router>
);

export default EmployeeRouting;
