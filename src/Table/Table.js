import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    canAddNewItem: PropTypes.bool,
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
    return <div>Table</div>;
  }
};

export default Table;