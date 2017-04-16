import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { timestampToDateString } from './../../../helpers/timeUtils';
import ChatBubble from './chatBubble';

//
const chatListStyle = {
  width: "100%", height: "255px", overflow: "auto",
  padding: "10px", marginTop: "5px", marginBottom: "15px",
  background: "#f1f3f4"
}
//

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
      <div className="room-chat-body" style={chatListStyle} ref={(div) => { this.messageList = div; }}>
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
