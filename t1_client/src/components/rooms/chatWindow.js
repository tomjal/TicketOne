import React, { Component } from 'react';

import ChatList from './chatList';

class ChatWindow extends Component {
  submitSendMessage() {
    var message = this.chatInput.value ? this.chatInput.value : "default";
    this.props.sendMessage(message);
    this.chatInput.value = "";
  }
  render() {
    const { messages } = this.props;
    return (
      <div>
        <ChatList messages={messages} />
        <input ref={(input) => { this.chatInput = input; }}></input>
        <button onClick={this.submitSendMessage.bind(this)}>Send</button>
      </div>
    );
  }
}

export default ChatWindow;
