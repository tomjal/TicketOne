import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { NotFoundPage } from './../notFoundPage';

test('NotFoundPage snapshot', () => {
  const wrap = shallow(<NotFoundPage />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});