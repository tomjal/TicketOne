import React, { Component } from 'react';

/*
message schema
{ body: "", author: { id: "", role: "senderRole" }, timestamp: "" }
*/

class ChatList extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  timestampToDateString(ts) {
    function pad(n) { return n < 10 ? '0' + n : n }

    let d = new Date(ts);
    let dateString = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    let timeString = pad(d.getHours()) + ':' + pad(d.getMinutes());
    return timeString + ' ' + dateString;
  }
  isMyBubble(role) {
    if (role == this.props.role) {
      return true;
    }
    return false;
  }
  render() {
    const { messages } = this.props;
    const chatListStyle = {
      width: "100%", height: "255px", overflow: "auto",
      padding: "10px", marginTop: "5px", marginBottom: "15px",
      background: "#f1f3f4", boxShadow: "0 1px 5px rgba(0,0,0,0.12), 0 1px 5px 0px rgba(0,0,0,0.24)"
    }

    const baseBubbleStyle = { width: "300px", background: "white", borderRadius: "5px", marginBottom: "10px", padding: "10px" };
    const leftBubbleStyle = { textAlign: "left" };
    const rightBubbleStyle = { textAlign: "right", marginLeft: "115px" };

    const headerMessageStyle = { color: "gray", fontSize: "1.2rem" };
    const bodyMessageStyle = { color: "black", fontSize: "1.4rem", wordWrap: "break-word" };

    let me = this;
    return (
      <div style={chatListStyle} ref={(div) => { this.messageList = div; }}>
        {messages &&
          <div >
            {
              messages.map(function (message, i) {
                let isMe = me.isMyBubble(message.author.role);
                let dateString = me.timestampToDateString(message.timestamp);
                let bubbleStyle = (isMe === true) ? { ...baseBubbleStyle, ...rightBubbleStyle } : { ...baseBubbleStyle, ...leftBubbleStyle };
                return <div style={bubbleStyle} key={i}>
                  <div style={headerMessageStyle}>{!isMe&&<span>{message.author.id} - </span>}{dateString}:</div>
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
