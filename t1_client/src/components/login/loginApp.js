import React, { Component, PropTypes } from 'react';

class LoginApp extends Component {
  constructor() {
    super();
    this.state = { login: "", pass: "" };
  }
  submitAction() {
    this.props.authCallback();
  }
  clientSubmitAction() {
    var id = this.textInput.value ? this.textInput.value : "default";
    this.props.mockClientCallback(id);
  }
  render() {
    const { mockClientCallback, mockEmployeeCallback } = this.props;
    const loginWidgetOuterStyle = { padding: "20px", height: "200px" };
    const loginWidgetInnerStyle = { padding: "20px", paddingLeft: "70px", height: "100%", textAlign: "left" };
    const biggerFont = { fontSize: "1.5rem" };
    return (
      <div className="container">
        <div class="row">
          <div style={loginWidgetOuterStyle} className="col-lg-6 col-md-6">
            <div style={loginWidgetInnerStyle} className="thumbnail widget">
              <div className="row widget-header-text">Log in as Client</div>
              <div className="row widget-block-span">
                <div><div className="widget-input-label">Client id:</div>
                <input style={biggerFont} type="text" className="form-control" ref={(input) => { this.textInput = input; }}></input></div>
                <div><button className="btn btn-default" onClick={this.clientSubmitAction.bind(this)}>
                  Log in as TicketOne client</button></div>
              </div>
            </div>
          </div>
          <div style={loginWidgetOuterStyle} className="col-lg-6 col-md-6">
            <div style={loginWidgetInnerStyle} className="thumbnail widget">
              <div className="row widget-header-text">Log in as Employee</div>
              <div className="row widget-block-span">
                <div><div className="widget-input-label">Employee id:</div>
                <div style={biggerFont}>JOSH_NEWMAN_TicketOne</div></div>
                <div><button className="btn btn-default" onClick={mockEmployeeCallback}>
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
