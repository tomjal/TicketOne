import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { AllRoomsPage } from './../allRoomsPage';

test('AllRoomsPage snapshot', () => {
  const wrap = shallow(<AllRoomsPage />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});