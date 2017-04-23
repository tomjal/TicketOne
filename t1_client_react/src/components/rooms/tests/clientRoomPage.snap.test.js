import React from 'react';
import renderer from 'react-test-renderer';

import { ClientRoomPage } from './../clientRoomPage';

test('ClientRoomPage snapshot', () => {
  const props = { getMessagesByRoom: () => null };
  const tree = renderer.create(<ClientRoomPage {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});