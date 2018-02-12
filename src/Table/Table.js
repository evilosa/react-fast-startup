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

  render() {
    const { children, header, items } = this.props;
    const headerColumns = [];
    const bodyColumns = [];
    const footerColumns = [];

    React.Children.forEach(children, (child) => {
      if (!child.type || child.type.displayName !== 'TableColumn')
        throw new Error('Child component should be instance of <TableColumn />');

      const { header, propName, footer, width } = child.props;

      // Fill headers columns
      headerColumns.push({ header, width });

      // Fill body columns
      bodyColumns.push({ propName, width });

      // Fill footer
      footerColumns.push({ footer, width });
    });

    return (
      <div>
        <h1>{header}</h1>
        <div className="table-header">
          {this._renderHeaders(headerColumns)}
        </div>
        <div className="table-body"></div>
        <div className="table-footer"></div>
      </div>
    );
  }
};

export default Table;