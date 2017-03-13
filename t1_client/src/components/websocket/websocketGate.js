import React, { Component } from 'react';

import { websocketManager } from './../../services/websocketManager';

class WebsocketGate extends Component {
  render() {
    const { subscription } = this.props;
    return (
      <div>
        <div>Subscribed to {subscription} WS channel</div>
      </div>
    );
  }
}

export default WebsocketGate;
