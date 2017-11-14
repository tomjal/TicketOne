import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { AllRoomsPage } from './../allRoomsPage';

test('AllRoomsPage snapshot', () => {
  const props = {
    rooms: [],
    getAllRooms: jest.fn(),
    getAllMessages: jest.fn()
  };
  const wrap = shallow(<AllRoomsPage {...props} />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});