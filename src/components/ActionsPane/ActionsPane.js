import * as React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import Radium from 'radium';

const ActionsPane = ({children, style, direction, align, inlineStyle}) => {
  return (
    <div
      style={
        [
          style.base,
          style[direction],
          style[direction][align],
          inlineStyle,
        ]
      }
      type="ActionsPane"
    >
      {children}
    </div>
  );
};

ActionsPane.propTypes = {
  style: Object,
  direction: PropTypes.oneOf(['horizontal', 'column']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

ActionsPane.defaultProps = {
  direction: 'horizontal',
  align: 'left',
  style,
};

//$FlowFixMe
export default Radium(ActionsPane);