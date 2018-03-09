import React from 'react'
import PropTypes from 'prop-types'

const PageContent = () => {
  return <div>Page content</div>
}

PageContent.propTypes = {
  children: PropTypes.node
}

PageContent.displayName = 'PageContent'

export default PageContent