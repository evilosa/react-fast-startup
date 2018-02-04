import * as React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import style from './style';

class NavBarItem extends React.Component {

  static propTypes = {
    style: PropTypes.object,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    onNavBarNotify: PropTypes.func,
  };

  static defaultProps = {
    style,
    path: '/',
    title: 'Link',
    active: false,
  };

  _handleClick = (event) => {
    const { onNavBarNotify, onClick, path } = this.props;

    if (onNavBarNotify)
      onNavBarNotify(event, path);

    if (onClick)
      onClick(event, path);
  };

  render() {
    const {style, inlineStyle, title, isActive} = this.props;

    return (
      <div
        style={[
          style.base,
          isActive && style.active,
          inlineStyle
        ]}
        onClick={this._handleClick}
      >
        {title}
      </div>
    );
  }
}

//$FlowFixMe
const ThemedNavBarItem = Radium(NavBarItem);
ThemedNavBarItem.displayName = 'NavBarItem';

export default ThemedNavBarItem;