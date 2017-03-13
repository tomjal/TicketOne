import React, { PureComponent, PropTypes } from 'react';

class Button extends PureComponent {
  render() {
    const { label, action };
    return (
      <button className="btn btn-default" onClick={action}>
        {label}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  label: React.PropTypes.string,
  action: React.PropTypes.func.isRequired
};

Button.defaultProps = {
  label: ""
};
