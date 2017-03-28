import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';
import EmployeeRouting from './employeeRouting';

import { ModuleHeader } from './../moduleHeader';

export class EmployeeAppWS extends Component {
  render() {
    return (
      <div>
        <EmployeeRouting />
        <WebsocketGate subscription={"192.168.0.12:8080"} />
      </div>
    );
  }
}
