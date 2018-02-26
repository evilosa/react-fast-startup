// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import style from './style';

class Button extends React.Component {

  static propTypes = {
    /** Default style for button */
    style: PropTypes.object,
    onClick: PropTypes.func
  };

  static defaultProps = {
    style,
  };

  _onClick = () => {};

  render() {
    const { style, onClick, inlineStyle, children } = this.props;

    return (
      <button style={[style.base, style.primary, inlineStyle]} onClick={onClick} type="Button">{children}</button>
    )
  }
}

//$FlowFixMe
export default Radium(Button);