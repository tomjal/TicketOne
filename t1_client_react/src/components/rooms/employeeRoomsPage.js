import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllOpenRoomsIds } from './../../actions/roomsActionCreators';
import { getAllMessages, sendMessageToRoom } from './../../actions/messagesActionCreators';
import { getEmployeeInitRoomsData } from './../../actions/combinedActionCreators';

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
    getAllOpenRoomsIds,
    getAllMessages,
    sendMessageToRoom,
    getEmployeeInitRoomsData
  }, dispatch);
};

export class EmployeeRoomsPage extends Component {
  constructor(props) {
    super(props)
    this.sendMessageCallback = this.sendMessageCallback.bind(this);
  }
  componentDidMount() {
    //combined init data employee
    this.props.getEmployeeInitRoomsData();
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
            {rooms.map((room, i) => {
              let localMessages = [];
              if (messages[room.id]) {
                localMessages = messages[room.id];
              }
              return <RoomWidget key={i}
                topic={room.roomTopic}
                isOpened={room.isOpened}
                id={room.id}
                creatorId={room.clientId}
                role={role}
                sendMessageCallback={this.sendMessageCallback}
                messages={localMessages} />;
            })}
            {emptyFlexElems.map((roomId, i) => {
              return <div key={`filler-${i}`} className="room-flex-container__filler"></div>;
            })}
          </div>
        }
        {rooms.length === 0 &&
          <div style={{ fontSize: 16 }}>
            There are no open chats currently
          </div>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeRoomsPage);
