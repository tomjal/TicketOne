import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import EmployeeApp, { EmployeeAppWS } from './employeeApp';

const EmployeeRouting = () => (
  <Router>
    <Route exact path="/" component={EmployeeAppWS} />
  </Router>
);

export default EmployeeRouting;
