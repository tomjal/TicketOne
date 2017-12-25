import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getClientRooms } from './../../actions/roomsActionCreators';
import { getMessagesByRoom, sendMessageToRoom } from './../../actions/messagesActionCreators';

import RoomWidget from './roomWidget';
import CreateNewRoomWidget from './createNewRoomWidget';

const mapStateToProps = (state) => {
  return {
    id: state.context.id,
    role: state.context.role,
    messages: state.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClientRooms,
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
    //TRANSFORM TO LIST
    //isOpened redux
    //create channel box
    const { id, role, messages } = this.props;
    return (
      <div className="room-flex-container">

        <RoomWidget
          isOpened={true}
          id={id}
          role={role}
          sendMessageCallback={this.sendMessageCallback}
          messages={messages} />
        <CreateNewRoomWidget
          createRoomCallback={null} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRoomPage);
