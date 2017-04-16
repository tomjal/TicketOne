import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import { loginStyles } from './../../styles/inline/specificStyles';
import { fontSizes } from './../../styles/inline/genericStyles';

import { LoginWidget } from './loginWidget';

const propTypes = {
  authCallback: PropTypes.func.isRequired
};

class LoginPage extends Component {
  constructor() {
    super();
    this.state = { login: '', pass: '' };
    this.clientSubmitAction = this.clientSubmitAction.bind(this);
    this.employeeSubmitAction = this.employeeSubmitAction.bind(this);
  }
  submitAction() {
    this.props.authCallback();
  }
  clientSubmitAction() {
    var id = this.textInput.value ? this.textInput.value : 'Default Client';
    this.props.mockClientCallback(id);
  }
  employeeSubmitAction() {
    this.props.mockEmployeeCallback()
  }
  render() {
    const clientLoginWidgetBody = <input type="text" className={`${css(loginStyles.inputRow, fontSizes.bigger)} form-control`}
      ref={(input) => { this.textInput = input; }} />;
    const employeeLoginWidgetBody = <div className={`${css(loginStyles.inputRow)} input--full-width`}>Employee_TicketOne</div>;

    return (
      <div className="container">
        <LoginWidget
          headerText="Log in as Client"
          inputLabel="Client id:"
          buttonLabel="Log in as TicketOne client"
          actionCallback={this.clientSubmitAction}>
          {clientLoginWidgetBody}
        </LoginWidget>
        <LoginWidget
          headerText="Log in as Employee"
          inputLabel="Employee id:"
          buttonLabel="Log in as TicketOne employee"
          actionCallback={this.employeeSubmitAction}>
          {employeeLoginWidgetBody}
        </LoginWidget>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = propTypes;
