import React, { Component } from 'react';

class ModuleShell extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="jumbotron">
        {children}
      </div>
    );
  }
}

export default ModuleShell;
