import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  //getApplicationContext, 
  setApplicationContextAsMockClient,
  setApplicationContextAsMockEmployee,
  postAuth
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
    //getApplicationContext,
    setApplicationContextAsMockClient,
    setApplicationContextAsMockEmployee,
    postAuth
  }, dispatch);
};

class AuthGate extends Component {
  componentDidMount() {
    //this.props.getApplicationContext();
  }
  getAuthenticatedApp(role, postAuth) {
    if (authManager.isClient(role)) {
      return <ClientAppWS />;
    } else if (authManager.isEmployee(role)) {
      return <EmployeeAppWS />;
    } else if (authManager.isUnspecified(role)) {
      return <LoginApp
        mockClientCallback={this.props.setApplicationContextAsMockClient}
        mockEmployeeCallback={this.props.setApplicationContextAsMockEmployee}
        authCallback={postAuth} />;
    }
  }
  render() {
    const { role, postAuth } = this.props;
    const accessNotAllowedLabel = <div>Access forbidden</div>;
    const authenticatedApp = this.getAuthenticatedApp(role, postAuth);

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
