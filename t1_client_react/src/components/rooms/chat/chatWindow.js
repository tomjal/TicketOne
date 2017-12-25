import React, { Component } from 'react';
import { css } from 'aphrodite';

import { chatWindowStyles } from './../../../styles/inline/specificStyles';
import { fontSizes } from './../../../styles/inline/genericStyles';

import ChatList from './chatList';

const KEY_CODES = { ENTER: 13 };

//resolved unresolved and close
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
      <div className={css(chatWindowStyles.chatWindow)}>

        <ChatList id={id} role={role} messages={messages} />
        <div className={css(chatWindowStyles.actionBlock)}>
          <input type="text" className={`${css(chatWindowStyles.chatInput, fontSizes.bigger)} form-control`}
            onKeyUp={this.handleKeyUp} ref={(input) => { this.chatInput = input; }} />
          <button className="btn btn-default" onClick={this.submitSendMessage}>
            Send message
          </button>
          <div>
            <button>set as resolved</button> <button>set as unresolved</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
