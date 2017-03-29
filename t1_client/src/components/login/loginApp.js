import React, { Component, PropTypes } from 'react';

class LoginApp extends Component {
  constructor() {
    super();
    this.clientSubmitAction = this.clientSubmitAction.bind(this);
    this.employeeSubmitAction = this.employeeSubmitAction.bind(this);
    this.state = { login: "", pass: "" };
  }
  submitAction() {
    this.props.authCallback();
  }
  clientSubmitAction() {
    var id = this.textInput.value ? this.textInput.value : "Default Client";
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
        <div class="row">
          <div className="col-lg-6 col-md-6">
            <div style={loginWidgetInnerStyle} className="thumbnail widget">
              <div className="row widget-header-text">Log in as Client</div>
              <div className="row widget-block-span">
                <div><div className="widget-input-label">Client id:</div>
                <input style={rowInput} type="text" className="form-control" ref={(input) => { this.textInput = input; }}></input></div>
                <div><button className="btn btn-default" onClick={this.clientSubmitAction}>
                  Log in as TicketOne client</button></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div style={loginWidgetInnerStyle} className="thumbnail widget">
              <div className="row widget-header-text">Log in as Employee</div>
              <div className="row widget-block-span">
                <div><div className="widget-input-label">Employee id:</div>
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

export default LoginApp;

LoginApp.PropTypes = {
  authCallback: PropTypes.func.isRequired
}
