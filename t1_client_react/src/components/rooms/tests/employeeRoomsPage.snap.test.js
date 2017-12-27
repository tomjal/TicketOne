import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { EmployeeRoomsPage } from './../employeeRoomsPage';

test('EmployeeRoomsPage snapshot', () => {
  const props = {
    role: "",
    messages: [],
    rooms: [],
    stats: { solved: 0, unsolved: 0 },
    getEmployeeInitRoomsData: jest.fn(),
    getGlobalSolvedUnsolvedStatistics: jest.fn(),
    sendMessageToRoom: jest.fn()
  };

  const wrap = shallow(<EmployeeRoomsPage {...props} />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});