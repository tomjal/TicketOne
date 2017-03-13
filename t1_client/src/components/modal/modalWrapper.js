import React, { Component } from 'react';

const modalStyle = {};

export const ModalWrapper = InnerComponent =>
  class extends Component {
    constructor() {
      super();
      this.hide = this.hide.bind(this);
    }

    hide() {
      if (this.props.onHide) {
        this.props.onHide();
      }
    }

    render() {
      return (
        <div style={modalStyle}>
          <button onClick={this.hide}>Close</button>
          <InnerComponent {...this.props} />
        </div>
      );
    }
  }

export default ModalWrapper;

ModalWrapper.propTypes = {
  onHide: React.PropTypes.func
};
