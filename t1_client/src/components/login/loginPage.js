import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const loginWidgetInnerStyle = { padding: "20px", paddingLeft: "70px", height: "100%", textAlign: "left" };
    const rowInput = { verticalAlign: "top", height: "35px", margin: "5px", marginLeft: "0px", fontSize: "1.5rem" };

    return (
      <div className="container">
        <div>
          <div className="col-lg-6 col-md-6">
            <div style={loginWidgetInnerStyle} className="thumbnail widget">
              <div className="row widget__header-text">Log in as Client</div>
              <div className="row widget__block-span">
                <div><div className="widget__input-label">Client id:</div>
                  <input style={rowInput} type="text" className="form-control" ref={(input) => { this.textInput = input; }}></input></div>
                <div><button className="btn btn-default" onClick={this.clientSubmitAction}>
                  Log in as TicketOne client</button></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div style={loginWidgetInnerStyle} className="thumbnail widget">
              <div className="row widget__header-text">Log in as Employee</div>
              <div className="row widget__block-span">
                <div><div className="widget__input-label">Employee id:</div>
                  <div style={rowInput} className="inputStyle">Employee_TicketOne</div></div>
                <div><button className="btn btn-default" onClick={this.employeeSubmitAction}>
                  Log in as TicketOne employee</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = propTypes;
