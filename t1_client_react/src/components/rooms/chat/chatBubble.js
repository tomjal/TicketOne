import React, { Component } from 'react';
import { css } from 'aphrodite';

import { chatBubbleStyles } from './../../../styles/inline/specificStyles';

export class ChatBubble extends Component {

  render() {
    const { isMe, message, date } = this.props;
    const bubbleClass = isMe ?
      css(chatBubbleStyles.chatBubbleBase, chatBubbleStyles.chatBubbleRight)
      : css(chatBubbleStyles.chatBubbleBase, chatBubbleStyles.chatBubbleLeft);

    return (
      <div className={bubbleClass}>
        <div className={css(chatBubbleStyles.chatMessageHeader)}>
          {!isMe &&
            <span>{message.author.id} - </span>}
          {date}:
        </div>
        <div className={css(chatBubbleStyles.chatMessageContent)}>
          {message.body}
        </div>
      </div>
    )
  };
}

export default ChatBubble;
