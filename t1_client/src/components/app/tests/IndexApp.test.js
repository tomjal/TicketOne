import React from 'react';
import ReactDOM from 'react-dom';
import IndexApp from './../IndexApp';

it('IndexApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndexApp />, div);
});
