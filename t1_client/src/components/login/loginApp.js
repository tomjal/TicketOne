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
    return (
      <div>
        <div>Log in as: (refresh browser to log out mock user)</div>
        <input ref={(input) => { this.textInput = input; }}></input>
        <button onClick={this.clientSubmitAction.bind(this)}>Named mock client</button>
        <button onClick={mockEmployeeCallback}>Mock employee</button>
      </div>
    );
  }
}

export default LoginApp;

LoginApp.PropTypes = {
  authCallback: PropTypes.func.isRequired
}
