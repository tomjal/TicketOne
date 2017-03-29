import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import { getMessagesByRoom, getAllMessages } from './../../actions/messagesActionCreators';

import { websocketManager } from './../../services/websocketManager';
import { authManager } from './../../services/authManager';

import { WS_COMMANDS } from './../../consts/commands';
import { WS } from './../../config/servers';

const mapStateToProps = (state) => {
  return {
    id: state.context.id,
    role: state.context.role,
    rooms: state.rooms
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMessagesByRoom,
    getAllRooms,
    getAllMessages
  }, dispatch);
};

class WebsocketGate extends Component {
  constructor() {
    super();
    this.state = { isOpened: false };
  }
  componentDidMount() {
    this.initGate(WS.SERVER_ADDRESS);
  }
  componentDidUpdate() {
    if (authManager.isClient(this.props.role)) {
      websocketManager.createChannel(this.props.role, this.props.id);
    }
  }
  initGate(addr) {
    websocketManager.initNewConnection(
      addr,
      this.onOpen.bind(this),
      this.onMessage.bind(this),
      this.onClose.bind(this))
  }
  onOpen(e) {
    console.log(e);
    this.setState({ isOpened: true });
  }
  onMessage(e) {
    console.log(e);
    let data = e.data;
    if (data.split(":")[0] === WS_COMMANDS.NEW_MESSAGE) {
      this.onNewMessageAction(data);
    }
    if (data.split(":")[0] === WS_COMMANDS.NEW_ROOM) {
      this.onNewRoomAction(data);
    }
  }
  onNewMessageAction(data) {
    if (authManager.isClient(this.props.role)) {
      this.props.getMessagesByRoom(data.split(":")[1])
    }
    if (authManager.isEmployee(this.props.role)) {
      this.props.getAllMessages()
    }
  }
  onNewRoomAction(data) {
    if (authManager.isEmployee(this.props.role)) {
      this.props.getAllRooms();
      this.props.getAllMessages();
    }
  }
  onClose(e) {
    console.log(e);
  }
  render() {
    const moduleConnectionFooter = {
      position: "fixed",
      bottom: "30px",
      left: "0px",
      textAlign: "left",
      margin: "10px",
      fontSize: "1.7rem",
      zIndex: "1000"
    };
    return (
      <div style={moduleConnectionFooter}>
        {!this.state.isOpened &&
          <div>
            <span className="label label-warning">Connecting to TicketOne system...</span>
          </div>}
        {this.state.isOpened &&
          <div>
            <span className="label label-success">Connected to TicketOne system</span>
          </div>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsocketGate);
