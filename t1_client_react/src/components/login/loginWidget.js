import React, { Component } from 'react';

export class LoginWidget extends Component {
  render() {
    const { children, headerText, inputLabel } = this.props;
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
        </div>
      </div>
    );
  }
}

export default LoginWidget;
