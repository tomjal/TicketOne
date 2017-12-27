import React, { Component } from 'react';

import ModuleShell from './../shell/moduleShell';
import AuthGate from './../gates/authGate';

import packageJson from './../../../package.json';

export class IndexApp extends Component {
  render() {
    const version = packageJson ? packageJson.version : " -- ";

    return (
      <div className="App">
        <div className="App__header">
          TicketOne - web support app
        </div>
        <ModuleShell>
          <AuthGate />
        </ModuleShell>
        <div className="App__footer">
          v{version} (refresh page to log out mock user)
        </div>
      </div>
    );
  }
}

export default IndexApp;
