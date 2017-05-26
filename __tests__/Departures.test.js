import React from 'react';
import ReactDOM from 'react-dom';
import Departures from '../src/components/Departures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const hasContent = false
  ReactDOM.render(<Departures departureList={hasContent}/>, div);
});
