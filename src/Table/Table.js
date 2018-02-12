import * as React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    canAddNewItem: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    items: [],
    canAddNewItem: false,
    header: '',
  };

  constructor(props) {
    super(props);

    const { items } = props;

    this.state = {
      items,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items) {
      this.setState(prev => ({
        ...prev,
        items: nextProps.items,
      }));
    }
  }

  _renderHeaders = (headerColumns) => {
    return headerColumns.map(({header, width}, index) => (
      <div className="table-header-column" key={index}>{header}</div>
    ));
  };

  _renderRows = (rowColumns) => {
    const { items } = this.state;
    return items.map((rowData, rowIndex) => (
      <div className="table-row" key={rowIndex}>
        {this._renderRowColumns(rowColumns, rowData)}
      </div>
    ));
  };

  _renderRowColumns = (rowColumns, rowData) => (
    rowColumns.map((column, index) => {
      const columnData = rowData[column.propName];
      return <div className="table-row-column" key={index}>{columnData}</div>
    })
  );

  render() {
    const { children, header } = this.props;
    const headerColumns = [];
    const rowColumns = [];
    const footerColumns = [];

    React.Children.forEach(children, (child) => {
      if (!child.type || child.type.displayName !== 'TableColumn')
        throw new Error('Child component should be instance of <TableColumn />');

      const { header, propName, footer, width } = child.props;

      // Fill headers columns
      headerColumns.push({ header, width });

      // Fill row columns
      rowColumns.push({ propName, width });

      // Fill footer
      footerColumns.push({ footer, width });
    });

    return (
      <div>
        <h1>{header}</h1>
        <div className="table-header">
          {this._renderHeaders(headerColumns)}
        </div>
        <div className="table-body">
          {rowColumns.length > 0 && this._renderRows(rowColumns)}
        </div>
        <div className="table-footer"></div>
      </div>
    );
  }
};

export default Table;