import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createClientRoom, getClientRooms, markRoomAsResolved, markRoomAsUnresolved } from './../../actions/roomsActionCreators';
import { sendMessageToRoom } from './../../actions/messagesActionCreators';
import { getClientInitRoomsData } from './../../actions/combinedActionCreators';

import RoomWidget from './roomWidget';
import CreateNewRoomWidget from './createNewRoomWidget';

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
    createClientRoom,
    getClientRooms,
    sendMessageToRoom,
    markRoomAsResolved,
    markRoomAsUnresolved,
    getClientInitRoomsData
  }, dispatch);
};

export class ClientRoomPage extends Component {
  componentDidMount() {
    //combined init data client
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
            topic={room.roomTopic}
            isOpened={room.isOpened}
            isSolved={room.isSolved}
            clientId={id}
            id={room.id}
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
)(ClientRoomPage);
