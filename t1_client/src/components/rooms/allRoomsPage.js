import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import { getAllMessages, sendMessageToRoom } from './../../actions/messagesActionCreators';

import RoomWidget from './roomWidget';

const MAX_FLEX_ELEMS_IN_ROW = 3;

const mapStateToProps = (state) => {
  return {
    id: state.context.id,
    role: state.context.role,
    rooms: state.rooms,
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
  getEmptyFlexFillers(numbInRow, numbOfAll) {
    let emptyElemsNumber = numbInRow - (numbOfAll % numbInRow);
    let emptyFlexElems = [];
    for (let i = 0; i < emptyElemsNumber; i++) {
      emptyFlexElems.push({ id: i });
    }
    return emptyFlexElems;
  }
  render() {
    const { role, rooms, messages } = this.props;
    const emptyFlexElems = this.getEmptyFlexFillers(MAX_FLEX_ELEMS_IN_ROW, rooms.length);

    return (
      <div>
        {rooms.length !== 0 &&
          <div className="room-flex-container">
            {rooms.map((roomId, i) => {
              let localMessages = [];
              if (messages[roomId]) {
                localMessages = messages[roomId];
              }
              return <div key={i}>
                <RoomWidget
                  id={roomId}
                  role={role}
                  sendMessageCallback={this.sendMessageCallback}
                  messages={localMessages} />
              </div>;
            })}
            {emptyFlexElems.map((roomId, i) => {
              return <div key={`filler-${i}`} className="room-flex-container__filling"></div>;
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
