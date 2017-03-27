import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getClientRoom } from './../../actions/roomsActionCreators';
import { getMessagesByRoom, sendMessage } from './../../actions/messagesActionCreators';

import Room from './room';

const mapStateToProps = (state) => {
  return {
    id: state.context.id,
    role: state.context.role,
    messages: state.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClientRoom,
    getMessagesByRoom,
    sendMessage
  }, dispatch);
};

export class ClientRoomPage extends Component {
  componentDidMount() {
    this.props.getClientRoom();
    this.props.getMessagesByRoom(this.props.id);
  }
  sendMessageCallback(message, id) {
    this.props.sendMessage(message, id, this.props.role, this.props.id);
  }
  render() {
    const { id, messages } = this.props;
    return (
      <div>
        <div className="well">Client room Page</div>
        <div>
          <Room
            sendMessageCallback={this.sendMessageCallback.bind(this)}
            id={id}
            messages={messages} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRoomPage);
