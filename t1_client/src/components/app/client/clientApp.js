import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';

export class ClientAppWS extends Component {
  render() {
    return (
      <div>
        <ClientApp />
        <div>Connected to websocket</div>
        <WebsocketGate subscription={"client"} />
      </div>
    );
  }
}

export class ClientApp extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello client
        </p>
      </div>
    );
  }
}

export default ClientApp;
