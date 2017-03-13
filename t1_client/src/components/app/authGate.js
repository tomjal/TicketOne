import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getApplicationContext, postAuth } from './../../actions/authActionCreators';
import { authManager } from './../../services/authManager';

import ClientRouting from './client/clientRouting';
import EmployeeRouting from './employee/employeeRouting';
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
    //this.props.getApplicationContext();
  }
  render() {
    const { role, postAuth } = this.props;
    const accessNotAllowed = <div>Access forbidden</div>;
    return (
      <div>
        {!authManager.isRoleAllowed(role) && accessNotAllowed}
        {authManager.isClient(role) &&
          <ClientRouting />}
        {authManager.isEmployee(role) &&
          <EmployeeRouting />}
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
