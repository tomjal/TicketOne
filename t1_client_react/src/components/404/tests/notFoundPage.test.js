import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from './../notFoundPage';

describe('NotFoundPage', () => {
  it('should find correct text in h2 tag', () => {
    // Arrange
    const wrap = shallow(<NotFoundPage />);
    const correctText = "404 not found";

    // Assert
    expect(wrap.find('h2').text()).toBe(correctText);
  })
})