import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { RoomWidget } from './../roomWidget';

test('RoomWidget snapshot', () => {
  const props = {
    id: 0,
    creatorId: 1,
    role: "",
    messages: []
  };

  const wrap = shallow(<RoomWidget {...props} />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});