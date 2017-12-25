import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    //const clientLoginWidgetBody = <input type="text" className="input form-control"
    //  ref={(input) => { this.textInput = input; }} />;
    const clientLoginWidgetBody = <div>
      <button className="btn btn-default" onClick={null}>login as fake client1</button>
      <button className="btn btn-default" onClick={null}>login as fake client2</button>
    </div>;
    //const employeeLoginWidgetBody = <div className="input">Employee_TicketOne</div>;
    const employeeLoginWidgetBody = <div>
      <button className="btn btn-default" onClick={null}>login as fake employee1</button>
    </div>;

    const containerElemClass = "col-lg-6 col-md-6";
    return (
      <div className="container">
        <div className={containerElemClass}>
          <LoginWidget
            headerText="Log in as Client"
            inputLabel="Client id:"
            buttonLabel="Log in as TicketOne client"
            actionCallback={this.clientSubmitAction}>
            {clientLoginWidgetBody}
          </LoginWidget>
        </div>
        <div className={containerElemClass}>
          <LoginWidget
            headerText="Log in as Employee"
            inputLabel="Employee id:"
            buttonLabel="Log in as TicketOne employee"
            actionCallback={this.employeeSubmitAction}>
            {employeeLoginWidgetBody}
          </LoginWidget>
        </div>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = propTypes;
