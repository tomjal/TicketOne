import React, { Component } from 'react';

import ChatList from './chatList';

export class ChatWindow extends Component {
  constructor() {
    super();
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.submitSendMessage = this.submitSendMessage.bind(this);
  }
  submitSendMessage() {
    let message = this.chatInput.value;
    if (message && message.length > 0) {
      this.props.sendMessage(message);
      this.chatInput.value = "";
    }
  }
  handleKeyUp(event) {
    if (event.keyCode === 13) return this.submitSendMessage();
  }
  render() {
    const { id, role, messages } = this.props;
    const chatWindowStyle = { marginTop: "10xp", marginBottom: "10px" };
    const inputSpanStyle = { marginLeft: "10px", marginRight: "10px" };
    const inputBoxStyle = { display: "inline-block", width: "270px", fontSize: "1.5rem", marginRight: "20px" };

    return (
      <div style={chatWindowStyle}>
        <ChatList id={id} role={role} messages={messages} />
        <div style={inputSpanStyle}>
          <input style={inputBoxStyle} type="text" className="form-control"
            onKeyUp={this.handleKeyUp} ref={(input) => { this.chatInput = input; }} />
          <button className="btn btn-default" onClick={this.submitSendMessage}>Send message</button>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
