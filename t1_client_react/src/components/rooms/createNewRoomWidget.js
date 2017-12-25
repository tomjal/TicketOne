import React, { Component } from 'react';

export class CreateNewRoomWidget extends Component {
  createNewRoom = () => {
    const { createRoomCallback } = this.props;
    createRoomCallback(this.topicInput.value);
    this.cleanData();
  }
  cleanData = () => {
    this.topicInput.value = "";
  }
  render() {
    return (
      <div className="room-widget">
        <div className="widget__header">
          Create new room
        </div>
        <div>
          <div className="widget__input-label">
            Choose new conversation topic:
          </div>
          <input type="text" className="widget__input-textarea form-control"
            ref={(input) => { this.topicInput = input; }} />
          <button className="btn btn-default" onClick={this.createNewRoom}>
            Ask employee
            </button>
        </div>
      </div>
    );
  }
}

export default CreateNewRoomWidget;
