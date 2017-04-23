import React, { Component } from 'react';

import { authManager } from './../../services/authManager';
import ChatWindow from './chat/chatWindow';

export class RoomWidget extends Component {
  constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
    this.state = { isOpened: true };
  }
  sendMessage(message) {
    this.props.sendMessageCallback(message, this.props.id);
  }
  render() {
    const { id, role, messages } = this.props;
    const isClientRoom = authManager.isClient(role);

    return (
      <div className="room-widget">
        {isClientRoom &&
          <div className="widget__header-text">
            Hello {id} - how can we help you?
          </div>
        }
        {!isClientRoom &&
          <div className="widget__header-text">
            id: {id}
          </div>
        }
        <div>
          {this.state.isOpened &&
            <ChatWindow
              role={role}
              sendMessage={this.sendMessage}
              messages={messages} />}
        </div>
      </div>
    );
  }
}

export default RoomWidget;
