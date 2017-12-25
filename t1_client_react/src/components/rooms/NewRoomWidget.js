import React, { Component } from 'react';

export class NewRoomWidget extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div className="room-widget">
        <div className="widget__header">
          Create new room
        </div>
        <div>
         Topic
         <input />
         <button />
        </div>
      </div>
    );
  }
}

export default NewRoomWidget;
