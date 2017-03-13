import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';

export class EmployeeAppWS extends Component {
  render() {
    return (
      <div>
        <EmployeeApp />
        <WebsocketGate subscription={"employee"} />
      </div>
    );
  }
}

export class EmployeeApp extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello employee
        </p>
      </div>
    );
  }
}

export default EmployeeApp;
