import React, { Component } from 'react';
import { css } from 'aphrodite';

import { chatStyles } from './../../../styles/inline/specificStyles';
import { fontSizes } from './../../../styles/inline/genericStyles';

import ChatList from './chatList';

const KEY_CODES = { ENTER: 13 };

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
    if (event.keyCode === KEY_CODES.ENTER) {
      return this.submitSendMessage();
    }
  }
  render() {
    const { id, role, messages } = this.props;

    return (
      <div className={css(chatStyles.window)}>
        <ChatList id={id} role={role} messages={messages} />
        <div className={css(chatStyles.span)}>
          <input type="text" className={`${css(chatStyles.box, fontSizes.bigger)} form-control`}
            onKeyUp={this.handleKeyUp} ref={(input) => { this.chatInput = input; }} />
          <button className="btn btn-default" onClick={this.submitSendMessage}>
            Send message
          </button>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
