import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getClientRoom } from './../../actions/roomsActionCreators';
import { getMessagesByRoom, sendMessageToRoom } from './../../actions/messagesActionCreators';

import RoomWidget from './roomWidget';

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
    sendMessageToRoom
  }, dispatch);
};

export class ClientRoomPage extends Component {
  constructor() {
    super();
    this.sendMessageCallback = this.sendMessageCallback.bind(this);
  }
  componentDidMount() {
    this.props.getMessagesByRoom(this.props.id);
  }
  sendMessageCallback(message, id) {
    this.props.sendMessageToRoom(message, id, this.props.role, this.props.id);
  }
  render() {
    const { id, role, messages } = this.props;
    return (
      <div className="room-flex-container">
        <RoomWidget
          id={id}
          role={role}
          sendMessageCallback={this.sendMessageCallback}
          messages={messages} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRoomPage);
