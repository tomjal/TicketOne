import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllRooms } from './../../actions/roomsActionCreators';
import { getMessagesByRoom, getAllMessages } from './../../actions/messagesActionCreators';

import { websocketManager } from './../../services/websocketManager';

const mapStateToProps = (state) => {
  return {
    role: state.context.role,
    id: state.context.id,
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
    this.initGate(this.props.subscription);
  }
  componentDidUpdate() {
    websocketManager.batchSubscribe(
      this.props.rooms, this.props.role, this.props.id);
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
    console.log("onMessage");
    console.log(e);
    if (e.data.split(":")[0] == "new_message") {
      if (this.props.role == "client") {
        this.props.getMessagesByRoom(e.data.split(":")[1])
      }
      if (this.props.role == "employee") {
        this.props.getAllMessages()
      }
    }

    if (e.data.split(":")[0] == "new_room") {
      if (this.props.role == "employee") {
        this.props.getAllRooms();
        this.props.getAllMessages();
      }
    }
  }
  onClose(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        {!this.state.isOpened && <div>Connecting to WS channel</div>}
        {this.state.isOpened && <div>Subscribed to WS channel</div>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsocketGate);
