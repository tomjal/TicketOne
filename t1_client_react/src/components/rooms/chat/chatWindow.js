import React, { Component } from 'react';
import { css } from 'aphrodite';

import { chatWindowStyles } from './../../../styles/inline/specificStyles';
import { fontSizes } from './../../../styles/inline/genericStyles';

import ChatList from './chatList';

const KEY_CODES = { ENTER: 13 };

export class ChatWindow extends Component {
  submitSendMessage = () => {
    let message = this.chatInput.value;
    if (message && message.length > 0) {
      this.props.sendMessage(message);
      this.chatInput.value = "";
    }
  }
  handleKeyUp = (event) => {
    if (event.keyCode === KEY_CODES.ENTER) {
      return this.submitSendMessage();
    }
  }
  render() {
    const { id, role, messages } = this.props;

    return (
      <div className={css(chatWindowStyles.chatWindow)}>
        <ChatList id={id} role={role} messages={messages} />
        {this.props.isOpened &&
          <div className={css(chatWindowStyles.actionBlock)}>
            <input type="text" className={`${css(chatWindowStyles.chatInput, fontSizes.bigger)} form-control`}
              onKeyUp={this.handleKeyUp} ref={(input) => { this.chatInput = input; }} />
            <button className="btn btn-default" onClick={this.submitSendMessage}>
              Send message
          </button>
          </div>
        }
        {!this.props.isOpened &&
          <div className={css(chatWindowStyles.actionBlock)}>
            Conversation closed. Read only mode
         </div>
        }
      </div>
    );
  }
}

export default ChatWindow;
