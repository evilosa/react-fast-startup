import * as React from 'react'
import style from './style';
import Radium from 'radium';

class Page extends React.Component {

  static defaultProps = {
    header: '',
  }

  _renderHeader = () => {
    const { header, onClose } = this.props;

    return (
      <div
        className='page-header'
        style={style.header}
      >
        {header && <div style={style.headerTitle}><h1>{header}</h1></div>}
        {onClose && <div style={style.headerButton}><button onClick={onClose}>X</button></div>}
      </div>
    )
  }

  _renderContent = content => (
    <div
      className='page-content'
      style={style.content}
    >
      {content}
    </div>
  )

  _renderFooter = footer => (
    <div
      className='page-footer'
      style={style.footer}
    >
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
      <div
        className='page-root'
        style={style.root}
      >
        {this._renderHeader()}
        {this._renderContent(content)}
        {this._renderFooter(footer)}
      </div>
    )
  }
}

export default Radium(Page);