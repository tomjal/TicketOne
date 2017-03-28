import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';
import ClientRouting from './clientRouting';

import { ModuleHeader } from './../moduleHeader';

export class ClientAppWS extends Component {
  render() {
    return (
      <div>
        <ClientRouting />
        <WebsocketGate subscription={"192.168.0.12:8080"} />
      </div>
    );
  }
}
