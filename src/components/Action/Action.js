// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

const LinkAction = (caption, href) => (
  <a href={href} type="LinkAction">{caption}</a>
);

const ButtonAction = (caption, onClick) => (
  <button onClick={onClick} type="ButtonAction">{caption}</button>
);

const IconAction = (icon) => (
  <div type="IconAction">Icon action {icon} is not implemented yet!</div>
);

const Action = ({type, caption, href, icon, onClick}) => {
  switch (type) {
    case 'link':
      return LinkAction(caption, href);

    case 'button':
      return ButtonAction(caption, onClick);

    case 'icon':
      return IconAction(icon);
  }
  return (
    <div type="Action">I'm an unknown action</div>
  );
};

Action.propTypes = {
  type: PropTypes.oneOf(['link', 'button', 'icon']),
  caption: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.optional,
  onClick: PropTypes.func.isRequired,
};

Action.defaultProps = {
  type: 'button',
  caption: '',
  href: '#',
  icon: 'default',
};

export default Action;