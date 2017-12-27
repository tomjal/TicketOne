import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onHide: PropTypes.func
};

export const ModalWrapper = InnerComponent =>
  class extends Component {
    hide = () => {
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
    render() {
      return (
        <div>
          <button onClick={this.hide}>Close</button>
          <InnerComponent {...this.props} />
        </div>
      );
    }
  }

export default ModalWrapper;

ModalWrapper.propTypes = propTypes;
