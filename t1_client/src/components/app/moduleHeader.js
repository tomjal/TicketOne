import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
};

const defaultProps = {
  label: ''
};

export class ModuleHeader extends PureComponent {
  render() {
    return (
      <div>
        <p className='App-intro'>
        </p>
      </div>
    );
  }
}

ModuleHeader.propTypes = propTypes;
ModuleHeader.defaultProps = defaultProps;
