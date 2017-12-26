import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { LoginWidget } from './loginWidget';

const propTypes = {
  //authCallback: PropTypes.func.isRequired
};

class LoginPage extends Component {
  submitAction = () => {
    //this.props.authCallback();
  }
  clientSubmitAction1 = () => {
    const fakeId1 = 101;
    this.props.mockClientCallback(fakeId1);
  }
  clientSubmitAction2 = () => {
    const fakeId2 = 102;
    this.props.mockClientCallback(fakeId2);
  }
  employeeSubmitAction = () => {
    this.props.mockEmployeeCallback()
  }
  render() {
    const clientLoginWidgetBody = <div>
      <button style={{"marginRight": 5}} className="btn btn-default" onClick={this.clientSubmitAction1}>login as fake client1</button>
      <button className="btn btn-default" onClick={this.clientSubmitAction2}>login as fake client2</button>
    </div>;
    const employeeLoginWidgetBody = <div>
      <button className="btn btn-default" onClick={this.employeeSubmitAction}>login as fake employee1</button>
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