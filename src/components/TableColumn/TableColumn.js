import React from 'react'
import PropTypes from 'prop-types'

const TableColumn = () => {
  return <div>Table column</div>
}

TableColumn.defaultProps = {
  header: '',
  propName: null,
  footer: null,
  width: '1 0',
  action: false,
}

TableColumn.propTypes = {
  header: PropTypes.string.isRequired,
  propName: PropTypes.string,
  width: PropTypes.string,
  action: PropTypes.bool,
  onClick: PropTypes.func,
}

TableColumn.displayName = 'TableColumn'

export default TableColumn