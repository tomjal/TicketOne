import React, { Component } from 'react';
import WebsocketGate from './../../websocket/websocketGate';
import ClientRouting from './clientRouting';

import { ModuleHeader } from './../moduleHeader';

export class ClientAppWS extends Component {
  render() {
    return (
      <div>
        <ModuleHeader label={"Client panel"} />
        <ClientRouting />
        <WebsocketGate subscription={"localhost:8080"} />
      </div>
    );
  }
}
