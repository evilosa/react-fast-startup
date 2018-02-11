import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
  const table = shallow(<Table/>);

  it('renders properly', () => {
    expect(table).isMatchSnapshot();
  });

});