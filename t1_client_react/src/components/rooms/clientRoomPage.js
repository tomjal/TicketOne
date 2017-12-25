import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createClientRoom } from './../../actions/roomsActionCreators';
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
    createClientRoom
  }, dispatch);
};

export class ClientRoomPage extends Component {
  constructor() {
    super();
    this.sendMessageCallback = this.sendMessageCallback.bind(this);
  }
  componentDidMount() {
    //this.props.getMessagesByRoom(this.props.id);
  }
  sendMessageCallback(message, id) {
    this.props.sendMessageToRoom(message, id, this.props.role, this.props.id);
  }
  createRoomCallback = (roomTopic) => {
    console.log("createRoomCallback")
    console.log(roomTopic)
    console.log(this.props.id)
    this.props.createClientRoom(this.props.id, roomTopic);
    //
  }
  render() {
    //TRANSFORM TO LIST
    //isOpened redux
    //create channel box
    const fakeRooms = [];
    const { id, role, messages } = this.props;
    return (
      <div className="room-flex-container">
        {fakeRooms.map((roomId, i) => {
          let localMessages = [];
          if (messages[roomId]) {
            localMessages = messages[roomId];
          }
          return <RoomWidget key={i}
            isOpened={true}
            id={roomId}
            role={role}
            sendMessageCallback={this.sendMessageCallback}
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
