import React, { PureComponent, PropTypes } from 'react';
import packageJson from './../../../package.json';

export class ModuleHeader extends PureComponent {
  render() {
    const version = packageJson ? packageJson.version : "unknown";
    return (
      <div>
        <p className="App-intro">
          {this.props.label} - Version: {version}
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
