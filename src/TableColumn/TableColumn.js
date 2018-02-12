import React from 'react';

const TableColumn = () => {
  return <div>Table column</div>;
};

TableColumn.defaultProps = {
  header: '',
  propName: null,
  footer: null,
  width: '1 0',
};

TableColumn.displayName = 'TableColumn';

export default TableColumn;