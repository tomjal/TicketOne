import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import { getAllMessages, sendMessageToRoom } from './../../actions/messagesActionCreators';

import Room from './room';

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    id: state.context.id,
    role: state.context.role,
    messages: state.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllRooms,
    getAllMessages,
    sendMessageToRoom
  }, dispatch);
};

export class AllRoomsPage extends Component {
  constructor(props) {
    super(props)
    this.sendMessageCallback = this.sendMessageCallback.bind(this);
  }
  componentDidMount() {
    this.props.getAllRooms();
    this.props.getAllMessages();
  }
  sendMessageCallback(message, id) {
    this.props.sendMessageToRoom(message, id, this.props.role, this.props.id);
  }
  render() {
    const { role, rooms, messages } = this.props;
    const flexMarginStyle = { margin: "15px" };
    let me = this;

    let maxNumbersOfRoomInRow = 4;
    let emptyElemsNumber = maxNumbersOfRoomInRow - (rooms.length % maxNumbersOfRoomInRow);
    let emptyFlexElems = [];
    for (let i = 0; i < emptyElemsNumber; i++) {
      emptyFlexElems.push({ id: i });
    }

    return (
      <div>
        {rooms.length === 0 && <div className="widget-header-text thumbnail">No client rooms</div>}
        {rooms.length !== 0 && <div className="room-flex-container">
          {rooms.map(function (roomId, i) {
            let localMessages = [];
            if (messages[roomId]) localMessages = messages[roomId];
            return <div style={flexMarginStyle} key={i}>
              <Room
                sendMessageCallback={me.sendMessageCallback}
                id={roomId}
                role={role}
                messages={localMessages} />
            </div>;
          })}
          {emptyFlexElems.map(function (roomId, i) {
            return <div className="room-flex-filling"></div>;
          })}
        </div>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRoomsPage);
