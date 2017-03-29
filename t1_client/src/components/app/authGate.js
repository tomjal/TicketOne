import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setApplicationContextAsMockClient,
  setApplicationContextAsMockEmployee,
  getApplicationContext,
  postAuthorizationData
} from './../../actions/authActionCreators';
import { authManager } from './../../services/authManager';

import { ClientAppWS } from './client/clientApp';
import { EmployeeAppWS } from './employee/employeeApp';
import LoginApp from './../login/loginApp';

const mapStateToProps = (state) => {
  return {
    role: state.context.role
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setApplicationContextAsMockClient,
    setApplicationContextAsMockEmployee,
    getApplicationContext,
    postAuthorizationData
  }, dispatch);
};

class AuthGate extends Component {
  componentDidMount() {
    //this.props.getApplicationContext();
  }
  getAuthenticatedApp(role) {
    if (authManager.isClient(role)) {
      return <ClientAppWS />;
    } else if (authManager.isEmployee(role)) {
      return <EmployeeAppWS />;
    } else if (authManager.isUnspecified(role)) {
      return <LoginApp
        mockClientCallback={this.props.setApplicationContextAsMockClient}
        mockEmployeeCallback={this.props.setApplicationContextAsMockEmployee}
        authCallback={this.props.postAuthorizationData} />;
    }
  }
  render() {
    const { role } = this.props;
    const accessNotAllowedLabel = <div>Access forbidden</div>;
    const authenticatedApp = this.getAuthenticatedApp(role);

    return (
      <div>
        {!authManager.isRoleAllowed(role) && accessNotAllowedLabel}
        {authenticatedApp}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGate);
