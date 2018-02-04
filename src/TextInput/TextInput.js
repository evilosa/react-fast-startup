import * as React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import style from './styles';
import ComponentHeader from '../ComponentHeader';

const TextInput = ({title, value, propName, onChange, style}) => {
  return (
    <ComponentHeader header={title}>
      <input
        style={
          [
            style.base,
          ]
        }
        type="TextInput"
        value={value}
        onChange={e => onChange && onChange(propName, e.currentTarget.value)}
      />
    </ComponentHeader>
  );
};

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  propName: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

TextInput.defaultProps = {
  title: '',
  value: '',
  style,
};

//$FlowFixMe
export default Radium(TextInput);