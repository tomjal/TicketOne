import React, { Component } from 'react';

import ChatWindow from './chatWindow';

class Room extends Component {
  constructor() {
    super();
    this.state = { isOpened: true };
  }
  sendMessage(message) {
    this.props.sendMessageCallback(message, this.props.id);
  }
  isClientRoom(role) {
    if (role == "client") {
      return true;
    }
    return false;
  }
  render() {
    const { id, role, messages } = this.props;
    const isClientRoom = this.isClientRoom(role);
    return (
      <div className="room">
        {isClientRoom && <div className="widget-header-text">Hello {id} - how can we help you?</div>}
        {!isClientRoom && <div className="widget-header-text">Room with client - {id}</div>}
        <div>
          {this.state.isOpened &&
            <ChatWindow
              role={role}
              sendMessage={this.sendMessage.bind(this)}
              messages={messages} />}
        </div>
      </div>
    );
  }
}

export default Room;
