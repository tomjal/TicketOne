import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getClientRoom } from './../../actions/roomsActionCreators';
import { getMessagesByRoom, sendMessage } from './../../actions/messagesActionCreators';

import Room from './room';

const mapStateToProps = (state) => {
  return {
    id: state.context.id,
    role: state.context.role,
    messages: state.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClientRoom,
    getMessagesByRoom,
    sendMessage
  }, dispatch);
};

export class ClientRoomPage extends Component {
  componentDidMount() {
    this.props.getClientRoom();
    this.props.getMessagesByRoom(this.props.id);
  }
  sendMessageCallback(message, id) {
    this.props.sendMessage(message, id, this.props.role, this.props.id);
  }
  render() {
    const { id, role, messages } = this.props;
    return (
      <div className="room-flex-container">
          <Room
            sendMessageCallback={this.sendMessageCallback.bind(this)}
            id={id}
            role={role}
            messages={messages} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRoomPage);
