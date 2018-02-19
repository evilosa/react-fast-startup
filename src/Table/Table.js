import * as React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import style from './style'

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
      <div className="table-header-column" key={index} style={[style.tableHeaderColumn, { flex: width }]}>{header}</div>
    ));
  };

  _renderRows = (rowColumns) => {
    const { items } = this.state;
    return items.map((rowData, rowIndex) => (
      <div className="table-row" key={rowIndex} style={[style.tableRow, rowIndex % 2 === 0 && style.even]}>
        {this._renderRowColumns(rowColumns, rowData)}
      </div>
    ));
  };

  _renderRowColumns = (rowColumns, rowData) => (
    rowColumns.map((column, index) => {
      const columnData = rowData[column.propName];
      return <div className="table-row-column" key={index} style={style.tableRowColumn}>{columnData}</div>
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
      <div style={style.root}>
        <h1>{header}</h1>

        {/* Header */}
        <div
          className="table-header"
          style={style.header}
        >
          {this._renderHeaders(headerColumns)}
        </div>

        {/* Body */}
        <div
          className="table-body"
          style={style.body}
        >
          {rowColumns.length > 0 && this._renderRows(rowColumns)}
        </div>

        {/* Footer */}
        <div
          className="table-footer"
          style={style.footer}
        >
        </div>
      </div>
    );
  }
};

export default Radium(Table);