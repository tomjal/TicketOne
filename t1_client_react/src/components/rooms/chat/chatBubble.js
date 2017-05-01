import React, { Component } from 'react';
import { css } from 'aphrodite';

import { chatStyles } from './../../../styles/inline/specificStyles';

export class ChatBubble extends Component {

  render() {
    const { isMe, message, date } = this.props;
    const bubbleClass = isMe ?
      css(chatStyles.bubbleBase, chatStyles.bubbleRight)
      : css(chatStyles.bubbleBase, chatStyles.bubbleLeft);

    return (
      <div className={bubbleClass}>
        <div className='message__header'>
          {!isMe &&
            <span>{message.author.id} - </span>}
          {date}:
        </div>
        <div className='message__body'>
          {message.body}
        </div>
      </div>
    )
  };
}

export default ChatBubble;
