import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { LoginWidget } from './loginWidget';

const propTypes = {
  //authCallback: PropTypes.func.isRequired
};

const FAKE_ID_1 = 101;
const FAKE_ID_2 = 102;

class LoginPage extends Component {
  //submitAction = () => {
  //  this.props.authCallback();
  //}
  fakeClient1SubmitAction = () => {
    this.props.mockClientCallback(FAKE_ID_1);
  }
  fakeClient2SubmitAction = () => {
    this.props.mockClientCallback(FAKE_ID_2);
  }
  employeeSubmitAction = () => {
    this.props.mockEmployeeCallback()
  }
  render() {
    const fakeClientLoginWidgetBody = <div>
      <button style={{ "marginRight": 5 }} className="btn btn-default"
        onClick={this.fakeClient1SubmitAction}>
        login as fake client1
      </button>
      <button className="btn btn-default"
        onClick={this.fakeClient2SubmitAction}>
        login as fake client2
      </button>
    </div>;
    const employeeLoginWidgetBody = <div>
      <button className="btn btn-default"
        onClick={this.employeeSubmitAction}>
        login as fake employee1
      </button>
    </div>;

    const containerElemClass = "col-lg-6 col-md-6";
    return (
      <div className="container">
        <div className={containerElemClass}>
          <LoginWidget
            headerText="Log in as Client"
            inputLabel="Client id:"
            buttonLabel="Log in as TicketOne client"
          //actionCallback={this.clientSubmitAction}
          >
            {fakeClientLoginWidgetBody}
          </LoginWidget>
        </div>
        <div className={containerElemClass}>
          <LoginWidget
            headerText="Log in as Employee"
            inputLabel="Employee id:"
            buttonLabel="Log in as TicketOne employee"
          //actionCallback={this.employeeSubmitAction}
          >
            {employeeLoginWidgetBody}
          </LoginWidget>
        </div>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = propTypes;