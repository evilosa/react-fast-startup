import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/Button';

const button = shallow(<Button />);

it('renders correctly', () => {
  expect(button).toMatchSnapshot();
});

test('render a label', () => {
  const wrapper = shallow(
    <div>Hello Jest!</div>
  );
  expect(wrapper).toMatchSnapshot();
});