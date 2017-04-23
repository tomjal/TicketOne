import React from 'react';
import { shallow } from 'enzyme';

import { IndexApp } from './../indexApp';

describe('IndexApp', () => {
  it('renders without crashing', () => {
    shallow(<IndexApp />)
  });
})