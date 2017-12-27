import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setApplicationContextAsMockClient,
  setApplicationContextAsMockEmployee,
} from './../../actions/authActionCreators';

import { authManager } from './../../services/authManager';

import { ClientAppWS } from './../app/client/clientApp';
import { EmployeeAppWS } from './../app/employee/employeeApp';
import LoginPage from './../login/loginPage';

const mapStateToProps = (state) => {
  return {
    role: state.context.role
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setApplicationContextAsMockClient,
    setApplicationContextAsMockEmployee
  }, dispatch);
};

class AuthGate extends Component {
  getAuthenticatedApp(role) {
    if (authManager.isClient(role)) {
      return <ClientAppWS />;
    } else if (authManager.isEmployee(role)) {
      return <EmployeeAppWS />;
    } else if (authManager.isUnspecified(role)) {
      return <LoginPage
        mockClientCallback={this.props.setApplicationContextAsMockClient}
        mockEmployeeCallback={this.props.setApplicationContextAsMockEmployee} />;
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
