import React from 'react'
import { ConnectedRouter } from 'react-router-redux';
import { history } from './../../../store/createHistory';

const ClientRouting = () => (
  <ConnectedRouter history={history}>
    <div>
      Work in progress
    </div>
  </ConnectedRouter>
);

export default ClientRouting;
