import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import {
  getMessagesByRoom,
  getAllMessages
} from './../../actions/messagesActionCreators';
import {
  notifyAboutNewRoom
} from './../../actions/notificationsActionCreators';

import { websocketManager } from './../../services/websocketManager';
import { authManager } from './../../services/authManager';

import { WS_COMMANDS } from './../../consts/commands';
import { WS } from './../../serversConfig';

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
    //getAllRooms,
    getAllMessages,
    notifyAboutNewRoom
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
      //to redux on create channel websocketManager.createChannel(this.props.role, this.props.id);
      //create topic?
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
      ////this.props.getMessagesByRoom(data.split(":")[1]);
      //messages getByRooms
    }
    if (authManager.isEmployee(this.props.role)) {
      //messages getByRooms
    }
  }
  onNewRoomAction(data) {
    if (authManager.isEmployee(this.props.role)) {
      //getAllOpenRoomsIds
      //messages getByRooms
      //this.props.notifyAboutNewRoom(data.split(":")[1]);
      
      ////this.props.getAllRooms();
      ////this.props.getAllMessages();
    }
  }
  onClose(e) {
    console.log(e);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <div className='connection-indicator'>
          {!this.state.isOpened &&
            <div>
              <span className="label label-warning">Connecting...</span>
            </div>}
          {this.state.isOpened &&
            <div>
              <span className="label label-success">Connected</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsocketGate);
