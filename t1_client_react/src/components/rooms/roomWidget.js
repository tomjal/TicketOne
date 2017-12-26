import React, { Component } from 'react';

import { authManager } from './../../services/authManager';
import ChatWindow from './chat/chatWindow';

export class RoomWidget extends Component {
  constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage(message) {
    this.props.sendMessageCallback(message, this.props.id);
  }
  markAsResolved = () => {
    this.props.markAsResolvedCallback(this.props.clientId, this.props.id);
  }
  markAsUnresolved = () => {
    this.props.markAsUnresolvedCallback(this.props.clientId, this.props.id);
  }
  render() {
    const { id, role, messages } = this.props;
    const isClientRoom = authManager.isClient(role);

    const chatHeaderText = isClientRoom ? `${this.props.topic}` : `topic: ${this.props.topic}`;
    return (
      <div className="room-widget">
        <div className="widget__header">
          {chatHeaderText}
          {isClientRoom && this.props.isOpened &&
            <p className="widget__header-menu">
              <button className="btn btn-default" onClick={this.markAsResolved}>Mark as Resolved</button>
              <button className="btn btn-default" onClick={this.markAsUnresolved}>Mark as Unresolved</button>
            </p>
          }
          {isClientRoom && !this.props.isOpened &&
            <p className="widget__header-menu">
              Closed and marked as: {this.props.isSolved ? "Solved" : "Unsolved"}</p>
          }
          {!isClientRoom &&
            <div>
              <div>
                room id: {id.toString()}
              </div>
              <div>
                client id: {this.props.creatorId.toString()}
              </div>
            </div>
          }
        </div>
        <div>
          <ChatWindow
            isOpened={this.props.isOpened}
            role={role}
            sendMessage={this.sendMessage}
            messages={messages} />
        </div>
      </div>
    );
  }
}

export default RoomWidget;
