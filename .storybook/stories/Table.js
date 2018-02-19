import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Table from '../../src/Table';
import TableColumn from '../../src/TableColumn';

storiesOf('Table', module)
  .add('default',
    withInfo({
      components: { Table },
      header: true,
      inline: true,
      text: 'Table component',
    })(() => {
      const items = [
          { id: '1', title: 'Toast', sum: '$5'},
          { id: '2', title: 'Chicken', sum: '$15'},
          { id: '3', title: 'Coffee', sum: '$3'},
        ];
      return (
        <div style={{height: '900px', display: 'flex'}}>
          <Table
            header="Test table"
            items={items}
          >
            <TableColumn header="Id" propName="id"/>
            <TableColumn header="Title" propName="title"/>
            <TableColumn header="Sum" propName="sum"/>
          </Table>
        </div>
      )
    }));