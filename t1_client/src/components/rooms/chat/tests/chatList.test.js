import React from 'react';
import { shallow } from 'enzyme';

import { ChatList } from './../chatList';

describe('ChatWindow', () => {
  it('should find room chat body', () => {
    const wrap = shallow(<ChatWindow />);
    const buttonText = 'Send message';

    expect(wrap.find('.room-chat-body')).toExist();
  });
})