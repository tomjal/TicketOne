import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { RoomWidget } from './../roomWidget';

test('RoomWidget snapshot', () => {
  const wrap = shallow(<RoomWidget />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});