import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import { getAllMessages, sendMessage } from './../../actions/messagesActionCreators';

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
    sendMessage
  }, dispatch);
};

export class RoomsPage extends Component {
  constructor(props) {
    super(props)
    this.sendMessageCallback = this.sendMessageCallback.bind(this);
  }
  componentDidMount() {
    this.props.getAllRooms();
    this.props.getAllMessages();
  }
  sendMessageCallback(message, id) {
    this.props.sendMessage(message, id, this.props.role, this.props.id);
  }
  render() {
    const { id, role, rooms, messages } = this.props;
    let me = this;
    return (
      <div>
        {rooms.length == 0 && <div className="widget-header-text thumbnail">No client rooms</div>}
        {rooms.length != 0 && <div className="room-flex-container">
          {rooms.map(function (roomId, i) {
            let localMessages = [];
            if (messages[roomId]) localMessages = messages[roomId];
            return <div key={i}>
              <Room
                sendMessageCallback={me.sendMessageCallback}
                id={roomId}
                role={role}
                messages={localMessages} />
            </div>;
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
)(RoomsPage);
