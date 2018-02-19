import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Radium from 'radium';
import style from './style';

class NavBar extends React.Component {

  static propTypes = {
    style: PropTypes.object,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    history: PropTypes.object,
  };

  static defaultProps = {
    direction: 'vertical',
    style,
  };

  constructor(props) {
    super(props);

    const { location: { pathname }} = props;
    this.state = {
      activePath: pathname,
    }
  }

  _onNavBarItemClick = (event, selectedPath) => {
    const { history } = this.props;

    this.setState(prev => ({
      ...prev,
      activePath: selectedPath,
    }));

    history.push(selectedPath);
  };

  render() {
    const {style, inlineStyle, direction, children} = this.props;

      const resultChildren = React.Children.map(children, (child) => {
        if (!child.type || child.type.displayName !== 'NavBarItem')
          throw new Error('Child component should be instance of <NavBarItem />');


        const hasPath = 'path' in child.props;
        const isActive = hasPath && child.props.path === this.state.activePath;

        return React.cloneElement(child, {
          isActive,
          onNavBarNotify: this._onNavBarItemClick,
        });
      });

      return (
        <div style={[style.base, style[direction], inlineStyle]}>
          {resultChildren}
        </div>
      );
    };
}

//$FlowFixMe
export default withRouter(Radium(NavBar));