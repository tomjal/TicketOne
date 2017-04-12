import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ClientRoomPage } from './../clientRoomPage';

test('ClientRoomPage snapshot', () => {
  const wrap = shallow(<ClientRoomPage />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});