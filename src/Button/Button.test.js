import React from 'react';
import Button from './Button';

describe('Button', () => {
  const button = shallow(<Button/>);

  it('renders correct', () => {
    expect(button).toMatchSnapshot();
  });
});