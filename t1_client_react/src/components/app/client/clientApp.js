import React, { Component } from 'react';
import WebsocketGate from './../../gates/websocketGate';

import ClientRouting from './clientRouting';

export class ClientAppWS extends Component {
  render() {
    return (
      <WebsocketGate>
        <ClientRouting />
      </WebsocketGate>
    );
  }
}
