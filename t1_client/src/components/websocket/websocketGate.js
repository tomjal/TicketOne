import React, { Component } from 'react';

import { websocketManager } from './../../services/websocketManager';

class WebsocketGate extends Component {
  constructor() {
    super();
    this.state = { isOpened: false };
  }
  componentDidMount() {
    this.initGate(this.props.subscription);
  }
  initGate(addr) {
    websocketManager.initNewConnection(
      addr,
      this.onOpen.bind(this),
      this.onMessage.bind(this),
      this.onClose.bind(this))
  }
  onOpen(e) {
    console.log(e);
    this.setState({ isOpened: true });
  }
  onMessage(e) {
    console.log(e);
  }
  onClose(e) {
    console.log(e);
  }
  render() {
    const { subscription } = this.props;
    return (
      <div>
        {!this.state.isOpened && <div>Connecting to WS channel</div>}
        {this.state.isOpened && <div>Subscribed to {subscription} WS channel</div>}
      </div>
    );
  }
}

export default WebsocketGate;
