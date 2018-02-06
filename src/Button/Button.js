// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import style from './style';

class Button extends React.Component {

  static propTypes = {
    /** Default style for button */
    style: PropTypes.object,
  };

  static defaultProps = {
    style,
  };

  _onClick = () => {
    const { style } = this.props;
    console.log('Button style');
    console.log(style);
  };

  render() {
    const { style, inlineStyle, children } = this.props;

    return (
      <button style={[style.base, style.primary, inlineStyle]} onClick={this._onClick} type="Button">{children}</button>
    )
  }
}

//$FlowFixMe
export default Radium(Button);