import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  createClientRoom,
  markRoomAsResolved,
  markRoomAsUnresolved
} from './../../actions/roomsActionCreators';
import { sendMessageToRoom } from './../../actions/messagesActionCreators';
import { getClientInitRoomsData } from './../../actions/combinedActionCreators';

import RoomWidget from './widgets/roomWidget';
import CreateNewRoomWidget from './widgets/createNewRoomWidget';

const mapStateToProps = (state) => {
  return {
    id: state.context.id,
    role: state.context.role,
    messages: state.messages,
    rooms: state.rooms
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClientInitRoomsData,
    createClientRoom,
    sendMessageToRoom,
    markRoomAsResolved,
    markRoomAsUnresolved,
  }, dispatch);
};

export class ClientRoomsPage extends Component {
  componentDidMount() {
    this.props.getClientInitRoomsData(this.props.id);
  }
  sendMessageCallback = (message, roomId) => {
    this.props.sendMessageToRoom(message, roomId, this.props.role, this.props.id);
  }
  createRoomCallback = (roomTopic) => {
    this.props.createClientRoom(this.props.id, roomTopic);
  }
  render() {
    const { id, role, messages, rooms } = this.props;
    return (
      <div className="room-flex-container">
        {rooms.map((room, i) => {
          let localMessages = [];
          if (messages[room.id]) {
            localMessages = messages[room.id];
          }
          return <RoomWidget key={i}
            id={room.id}
            topic={room.roomTopic}
            isOpened={room.isOpened}
            isSolved={room.isSolved}
            clientId={id}
            role={role}
            sendMessageCallback={this.sendMessageCallback}
            markAsResolvedCallback={this.props.markRoomAsResolved}
            markAsUnresolvedCallback={this.props.markRoomAsUnresolved}
            messages={localMessages} />;
        })}
        <CreateNewRoomWidget
          createRoomCallback={this.createRoomCallback} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRoomsPage);
