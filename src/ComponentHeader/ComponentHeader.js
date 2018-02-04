import * as React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import style from './styles';

const ComponentHeader = ({header, place, style, children}) => (
  <div
    style={
      [
        style.base,
        style[place],
      ]
    }
    type="ComponentHeader"
  >
    <div style={style.header}>{header}</div>
    <div style={style.content}>{children}</div>
  </div>
);

ComponentHeader.propTypes = {
  header: PropTypes.string.isRequired,
  place: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  style: PropTypes.object,
};

ComponentHeader.defaultProps = {
  header: '',
  place: 'left',
  style,
};

//$FlowFixMe
export default Radium(ComponentHeader);