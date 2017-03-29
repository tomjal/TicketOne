import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';
import ClientRouting from './clientRouting';

export class ClientAppWS extends Component {
  render() {
    return (
      <div>
        <ClientRouting />
        <WebsocketGate />
      </div>
    );
  }
}
