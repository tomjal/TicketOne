import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Room } from './../room';

test('Room snapshot', () => {
  const wrap = shallow(<Room />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});