import * as React from 'react'

class Page extends React.Component {

  static defaultProps = {
    header: '',
  }

  _renderHeader = () => {
    const { header, onClose } = this.props;

    return (
      <div className='page-header'>
        {header && <h1>{header}</h1>}
        {onClose && <button onClick={onClose}>X</button>}
      </div>
    )
  }

  _renderContent = content => (
    <div className='page-content'>
      {content}
    </div>
  )

  _renderFooter = footer => (
    <div className='page-footer'>
      {footer}
    </div>
  )

  render() {
    const { children } = this.props
    let content = ''
    let footer = ''

    React.Children.forEach(children, (child) => {
      if (!child.type
        || (
          child.type.displayName !== 'PageContent'
          && child.type.displayName !== 'PageFooter'
      ))
        throw new Error('Child component should be instance of <PageContent/> or <PageFooter/>')

      const { children } = child.props

      switch (child.type.displayName) {
        case 'PageContent':
          content = children
          break
        case 'PageFooter':
          footer = children
          break
      }
    })

    return (
      <div className='page-root'>
        {this._renderHeader()}
        {this._renderContent(content)}
        {this._renderFooter(footer)}
      </div>
    )
  }
}

export default Page