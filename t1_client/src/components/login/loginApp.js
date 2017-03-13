import React, { Component, PropTypes } from 'react';

class LoginApp extends Component {
  constructor() {
    super();
    this.state = { login: "", pass: "" };
  }
  submitAction() {
    this.props.authCallback();
  }
  render() {
    return (
      <div>
        <div>Please log in:</div>
        <button onClick={this.submitAction.bind(this)}>Send</button>
      </div>
    );
  }
}

export default LoginApp;

LoginApp.PropTypes = {
  authCallback: PropTypes.func.isRequired
}
