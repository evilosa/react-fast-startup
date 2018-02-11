import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {

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

  render() {
    // const { children } = this.props;
    // console.log(children);

    return (
      <div>
        <div className="table-header"></div>
        <div className="table-rows"></div>
        <div className="table-footer"></div>
      </div>
    );
  }
};

export default Table;