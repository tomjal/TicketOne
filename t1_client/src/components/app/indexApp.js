import React, { Component } from 'react';

import ModuleShell from './moduleShell';
import AuthGate from './authGate';

class IndexApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TicketOne</h2>
        </div>
        <ModuleShell>
          <AuthGate />
        </ModuleShell>
      </div>
    );
  }
}

export default IndexApp;
