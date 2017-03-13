import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getApplicationContext, postAuth } from './../../actions/authActionCreators';
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
    getApplicationContext,
    postAuth
  }, dispatch);
};

class AuthGate extends Component {
  componentDidMount() {
    this.props.getApplicationContext();
  }
  render() {
    const { role, postAuth } = this.props;
    const accessNotAllowed = <div>Access forbidden</div>;
    return (
      <div>
        {!authManager.isRoleAllowed(role) && accessNotAllowed}
        {authManager.isClient(role) &&
          <ClientAppWS />}
        {authManager.isEmployee(role) &&
          <EmployeeAppWS />}
        {authManager.isUnspecified(role) &&
          <LoginApp authCallback={postAuth} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGate);
