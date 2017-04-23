import React, { Component } from 'react';
import { css } from 'aphrodite';

import { loginStyles } from './../../styles/inline/specificStyles';

export class LoginWidget extends Component {
  render() {
    const { children, headerText, inputLabel, buttonLabel, actionCallback } = this.props;
    return (
      <div className="col-lg-6 col-md-6">
        <div className={`${css(loginStyles.thumbnailWidget)} thumbnail widget`}>
          <div className="row widget__header-text">
            {headerText}
          </div>
          <div className="row widget__block-span">
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
      </div>
    );
  }
}

export default LoginWidget;
