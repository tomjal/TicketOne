import React, { Component } from 'react';

import ModuleShell from './moduleShell';
import AuthGate from './authGate';

import packageJson from './../../../package.json';

class IndexApp extends Component {
  render() {
    const version = packageJson ? packageJson.version : " -- ";
    return (
      <div className="App">
        <div className="App-header">
          TicketOne - customer support web application
        </div>
        <ModuleShell>
          <AuthGate />
        </ModuleShell>
        <div className="App-footer">
          version {version} (refresh browser to log out mock user)
        </div>
      </div>
    );
  }
}

export default IndexApp;
