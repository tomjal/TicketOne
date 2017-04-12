import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  action: PropTypes.func.isRequired
};

const defaultProps = {
  label: ''
};

class Button extends PureComponent {
  render() {
    const { label, action };
    return (
      <button className='btn btn-default' onClick={action}>
        {label}
      </button>
    );
  }
}

export default Button;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
