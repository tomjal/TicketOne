import React from 'react';
import { shallow } from 'enzyme';

import { ChatList } from './../chatList';

describe('ChatList', () => {
  it('should find room chat body', () => {
    const wrap = shallow(<ChatList />);
    const buttonText = 'Send message';

    expect(wrap.find('.room-chat-body')).toBeTruthy();
  });
})