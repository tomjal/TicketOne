import React, { Component } from 'react';
import WebsocketGate from './../../gates/websocketGate';
import EmployeeRouting from './employeeRouting';

// eslint-disable-next-line
import { ModuleHeader } from './../moduleHeader';

export class EmployeeAppWS extends Component {
  render() {
    return (
      <div>
        <EmployeeRouting />
        <WebsocketGate />
      </div>
    );
  }
}
