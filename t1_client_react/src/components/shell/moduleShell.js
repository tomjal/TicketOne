import React, { Component } from 'react';

class ModuleShell extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App__module repaint-fix">
        {children}
      </div>
    );
  }
}

export default ModuleShell;
