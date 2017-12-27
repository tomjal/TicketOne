import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ClientRoomPage } from './../clientRoomPage';

test('ClientRoomPage snapshot', () => {
  const props = { getMessagesByRoom: jest.fn() };
  const wrap = shallow(<ClientRoomPage {...props} />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});