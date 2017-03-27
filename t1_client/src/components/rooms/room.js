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
  render() {
    const { id, messages } = this.props;

    return (
      <div>Room - {id} - number of messages - {messages.length}
        {this.state.isOpened &&
          <ChatWindow
            sendMessage={this.sendMessage.bind(this)}
            messages={messages} />}
      </div>
    );
  }
}

export default Room;
