import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

//
const baseBubbleStyle = { width: "300px", background: "white", borderRadius: "5px", marginBottom: "10px", padding: "10px" };
const leftBubbleStyle = { textAlign: "left" };
const rightBubbleStyle = { textAlign: "right", marginLeft: "115px" };

const headerMessageStyle = { color: "gray", fontSize: "1.2rem" };
const bodyMessageStyle = { color: "black", fontSize: "1.4rem", wordWrap: "break-word" };
//

export class ChatBubble extends Component {

  render() {
    const { key, isMe, message, date } = this.props;
    const bubbleStyle = isMe ?
      { ...baseBubbleStyle, ...rightBubbleStyle }
      : { ...baseBubbleStyle, ...leftBubbleStyle };

    return (
      <div style={bubbleStyle} key={key}>
        <div style={headerMessageStyle}>
          {!isMe &&
            <span>{message.author.id} - </span>}
          {date}:
        </div>
        <div style={bodyMessageStyle}>
          {message.body}
        </div>
      </div>
    )
  };
}

export default ChatBubble;
