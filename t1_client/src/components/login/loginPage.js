import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { LoginWidget } from './loginWidget';

//
const rowInput = { verticalAlign: "top", height: "35px", margin: "5px", marginLeft: "0px", fontSize: "1.5rem" };
//

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
    const clientWidgetBody = <input style={rowInput} type="text" className="form-control"
      ref={(input) => { this.textInput = input; }} />;
    const employeeWidgetBody = <div style={rowInput} className="input--full-width">Employee_TicketOne</div>;

    return (
      <div className="container">
        <LoginWidget
          headerText="Log in as Client"
          inputLabel="Client id:"
          buttonLabel="Log in as TicketOne client"
          actionCallback={this.clientSubmitAction}>
          {clientWidgetBody}
        </LoginWidget>
        <LoginWidget
          headerText="Log in as Employee"
          inputLabel="Employee id:"
          buttonLabel="Log in as TicketOne employee"
          actionCallback={this.employeeSubmitAction}>
          {employeeWidgetBody}
        </LoginWidget>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = propTypes;
