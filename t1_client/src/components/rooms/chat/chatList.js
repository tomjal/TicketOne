import React, { Component } from 'react';

import { timestampToDateString } from './../../../helpers/timeUtils';

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
    const chatListStyle = {
      width: "100%", height: "255px", overflow: "auto",
      padding: "10px", marginTop: "5px", marginBottom: "15px",
      background: "#f1f3f4"
    }

    const baseBubbleStyle = { width: "300px", background: "white", borderRadius: "5px", marginBottom: "10px", padding: "10px" };
    const leftBubbleStyle = { textAlign: "left" };
    const rightBubbleStyle = { textAlign: "right", marginLeft: "115px" };

    const headerMessageStyle = { color: "gray", fontSize: "1.2rem" };
    const bodyMessageStyle = { color: "black", fontSize: "1.4rem", wordWrap: "break-word" };

    return (
      <div className="room-chat-body" style={chatListStyle} ref={(div) => { this.messageList = div; }}>
        {messages &&
          <div >
            {
              messages.map((message, i) => {
                const isMe = this.isMyBubble(message.author.role);
                const dateString = timestampToDateString(message.timestamp);
                const bubbleStyle = isMe ? { ...baseBubbleStyle, ...rightBubbleStyle } : { ...baseBubbleStyle, ...leftBubbleStyle };
                return <div style={bubbleStyle} key={i}>
                  <div style={headerMessageStyle}>{!isMe && <span>{message.author.id} - </span>}{dateString}:</div>
                  <div style={bodyMessageStyle}>{message.body}</div>
                </div>;
              })
            }
          </div>
        }
      </div>
    );
  }
}

export default ChatList;
