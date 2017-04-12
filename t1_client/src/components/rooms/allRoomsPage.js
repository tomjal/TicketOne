import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import { getAllMessages, sendMessageToRoom } from './../../actions/messagesActionCreators';

import Room from './room';

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
    const flexChildMarginStyle = { margin: "15px" };

    const emptyFlexElems = this.getEmptyFlexFillers(4, rooms.length);

    return (
      <div>
        {rooms.length !== 0 && <div className="room-flex-container">
          {rooms.map((roomId, i) => {
            let localMessages = [];
            if (messages[roomId]) localMessages = messages[roomId];
            return <div style={flexChildMarginStyle} key={i}>
              <Room
                sendMessageCallback={this.sendMessageCallback}
                id={roomId}
                role={role}
                messages={localMessages} />
            </div>;
          })}
          {emptyFlexElems.map((roomId, i) => {
            return <div key={`filler-${i}`} className="room-flex-filling"></div>;
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
