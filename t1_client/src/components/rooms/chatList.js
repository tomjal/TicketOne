import React, { Component } from 'react';

/*
message schema
{ body: message, author: { id: senderId, role: senderRole }, timestamp: Date.now() }
*/

class ChatList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages &&
          <div>
            {
              messages.map(function (message, i) {
                return <div key={i}>
                  <div>Time: {message.timestamp}</div>
                  <div>Sender: {message.author.id} - {message.author.role}</div>
                  <div> -- {message.body}</div>
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
