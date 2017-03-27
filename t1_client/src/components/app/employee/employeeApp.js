import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';
import EmployeeRouting from './employeeRouting';

import { ModuleHeader } from './../moduleHeader';

export class EmployeeAppWS extends Component {
  render() {
    return (
      <div>
        <ModuleHeader label={"Employee panel"} />
        <EmployeeRouting />
        <WebsocketGate subscription={"localhost:8080"} />
      </div>
    );
  }
}
