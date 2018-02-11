import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from './Table';
// import TableColumn from '../TableColumn';

describe('Table', () => {
  it('renders properly', () => {
    const table = shallow(<Table/>);
    expect(table).toMatchSnapshot();
  });

  it('initialize default props', () => {
    const table = mount(<Table/>);
    expect(table.props().items).toEqual([]);
  });

  it('initialize default state and update state with new props', () => {
    const table = mount(<Table/>);
    const testItem = { id: '1', name: 'Test name' };

    expect(table.state().items).toEqual([]);
    table.setProps({items: [ testItem ]});
    expect(table.state().items).toEqual([ testItem ]);
  });
});