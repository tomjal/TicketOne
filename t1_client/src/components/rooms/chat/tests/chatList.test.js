import React from 'react';
import { shallow } from 'enzyme';

import { ChatList } from './../chatList';

describe('ChatList', () => {
  it('should find room chat body', () => {
    // Arrange
    const wrap = shallow(<ChatList />);
    const buttonText = 'Send message';

    // Assert
    expect(wrap.find('.room-chat-body')).toBeTruthy();
  });
})