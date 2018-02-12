import React from 'react';
import { shallow, mount } from 'enzyme';
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

  describe('with empty items render', () => {
    const table = shallow(
      <Table>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
      </Table>
    );

    it('headers', () => {
      expect(table.find('.table-header').exists()).toBe(true);
    });

    it('body', () => {
      expect(table.find('.table-body').exists()).toBe(true);
    });

    it('footer', () => {
      expect(table.find('.table-footer').exists()).toBe(true);
    });

    it('headers without columns', () => {
      expect(table.find('.table-header-column').length).toEqual(0);
    });

    it('body without rows and row columns', () => {
      expect(table.find('.table-row').exists()).toBe(false);
      expect(table.find('.table-row-column').length).toEqual(0);
    });

    it('footer without columns', () => {
      expect(table.find('.table-footer-column').length).toEqual(0);
    });

    it('0 TableColumn with empty table', () => {
      expect(table.find(TableColumn).exists()).toBe(false);
    });
  });

  // describe('with provided items renders correct', () => {
  //   const items = [];
  //   const table = shallow(
  //     <Table items={items}>
  //       <TableColumn/>
  //       <TableColumn/>
  //       <TableColumn/>
  //     </Table>
  //   );
  //
  //   it('headers with 3 column', () => {
  //     expect(table.find('.table-header-column').length).toEqual(3);
  //   });
  // });
});