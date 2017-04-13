import React from 'react';
import { shallow } from 'enzyme';

import { ChatWindow } from './../chatWindow';

describe('ChatWindow', () => {
  it('should find send message button with correct text', () => {
    // Arrange
    const wrap = shallow(<ChatWindow />);
    const buttonText = 'Send message';

    // Assert
    expect(wrap.find('button').text()).toBe('Send message');
  });
})