import React, { Component } from 'react';

export class LoginWidget extends Component {
  render() {
    const { children, headerText, inputLabel, buttonLabel, actionCallback } = this.props;
    return (
      <div className="generic-widget">
        <div className="row widget__header">
          {headerText}
        </div>
        <div className="row widget__content">
          <div>
            <div className="widget__input-label">
              {inputLabel}
            </div>
            {children}
          </div>
          <div>
            <button className="btn btn-default" onClick={actionCallback}>
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginWidget;
