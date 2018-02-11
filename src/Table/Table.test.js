import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Table from './Table';
import TableColumn from '../TableColumn';

describe('Table', () => {
  it('renders properly', () => {
    const table = shallow(<Table/>);
    expect(table).toMatchSnapshot();
  });

  describe('props ', () => {
    const table = mount(<Table/>);
    const props = table.props();

    it('initialized with items', () => {
      expect(props.items).toEqual([]);
    });

    it('initialized with canAddNewItem option', () => {
      expect(props.canAddNewItem).toBe(false);
    });

    it('initialized with empty header', () => {
      expect(props.header).toEqual('');
    });
  });

  describe('state', () => {
    const table = mount(<Table/>);

    it('initialize default items state and update state with new items prop', () => {
      const testItem = { id: '1', name: 'Test name' };
      expect(table.state().items).toEqual([]);
      table.setProps({items: [ testItem ]});
      expect(table.state().items).toEqual([ testItem ]);
    });
  });

  describe('render', () => {
    const table = render(
      <Table>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
      </Table>
    );

    it('renders 0 TableColumn for empty items', () => {
      expect(table.find(TableColumn).length).toEqual(0);
    });

  });

});