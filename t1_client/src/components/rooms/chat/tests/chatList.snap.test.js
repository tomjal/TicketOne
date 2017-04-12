import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ChatList } from './../chatList';

test('ChatList snapshot', () => {
  const wrap = shallow(<ChatList />);

  expect(shallowToJson(wrap)).toMatchSnapshot();
});