import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from './../notFoundPage';

  describe('NotFoundPage', () => {
    it('should find correct text in h2 tag', () => {
      const wrap = shallow(<NotFoundPage />);
      const correctText = "404 not found";
      
      expect(wrap.find('h2').text()).toBe(correctText);
    })
  })