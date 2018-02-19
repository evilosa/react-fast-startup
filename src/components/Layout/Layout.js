import * as React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import style from './styles';

const Layout = ({children, direction}) => (
  <div
    style={
      [
        style.base,
        style[direction],
      ]
    }
    type="Layout"
  >
    {children}
  </div>
);

Layout.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

Layout.defaultProps = {
  style,
  direction: 'horizontal',
};

//$FlowFixMe
export default Radium(Layout);