import React from 'react';
import ReactDOM from 'react-dom';
import BusIcon from '../src/components/BusIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusIcon />, div);
});
