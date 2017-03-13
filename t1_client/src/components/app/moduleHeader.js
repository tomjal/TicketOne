import React, { PureComponent, PropTypes } from 'react';

export class ModuleHeader extends PureComponent {
  render() {
    return (
      <div>
        <p className="App-intro">
          {this.props.label}
        </p>
      </div>
    );
  }
}

ModuleHeader.propTypes = {
  label: PropTypes.string,
};

ModuleHeader.defaultProps = {
  label: ""
};
