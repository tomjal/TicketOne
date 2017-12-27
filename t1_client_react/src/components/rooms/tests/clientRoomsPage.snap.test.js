import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ClientRoomsPage } from './../clientRoomsPage';

test('ClientRoomsPage snapshot', () => {
  const props = {
    id: 0,
    role: "",
    messages: [],
    rooms: [],
    getClientInitRoomsData: jest.fn(),
    createClientRoom: jest.fn(),
    sendMessageToRoom: jest.fn(),
    markRoomAsResolved: jest.fn(),
    markRoomAsUnresolved: jest.fn()
  }

  const wrap = shallow(<ClientRoomsPage {...props} />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});