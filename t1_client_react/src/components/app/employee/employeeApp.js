import React, { Component } from 'react';
import WebsocketGate from './../../gates/websocketGate';

import EmployeeRouting from './employeeRouting';

export class EmployeeAppWS extends Component {
  render() {
    return (
      <WebsocketGate>
        <EmployeeRouting />
      </WebsocketGate>
    );
  }
}
