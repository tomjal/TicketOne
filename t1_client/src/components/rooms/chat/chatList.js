import React, { Component } from 'react';
import { css } from 'aphrodite';

import { chatStyles } from './../../../styles/inline/specificStyles';
import { timestampToDateString } from './../../../helpers/timeUtils';
import ChatBubble from './chatBubble';

export class ChatList extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    if (this.messageList) {
      const scrollHeight = this.messageList.scrollHeight;
      const height = this.messageList.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }
  isMyBubble(role) {
    if (role === this.props.role) {
      return true;
    }
    return false;
  }
  render() {
    const { messages } = this.props;

    return (
      <div className={`${css(chatStyles.list)} room-chat-body`} ref={(div) => { this.messageList = div; }}>
        {messages &&
          <div >
            {
              messages.map((message, i) => {
                const isMe = this.isMyBubble(message.author.role);
                const dateString = timestampToDateString(message.timestamp);
                return <ChatBubble key={i} isMe={isMe} message={message} date={dateString} />
              })
            }
          </div>
        }
      </div>
    );
  }
}

export default ChatList;
