import * as React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    title: '',
    options: [],
  };

  constructor(props) {
    super(props)

    const { options } = this.props;

    this.state = {
      isLoading: false,
      options,
      isOptionsVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options)
    {
      this.setState(prev => ({
        ...prev,
        options: nextProps.options,
      }))
    }
  }

  _handleSelectClick = () => {
    this.setState(prev => ({
      ...prev,
      isOptionsVisible: true,
    }))
  }

  _renderSelectButton = () => {
    const { isOptionsVisible } = this.state;
    if (!isOptionsVisible)
      return <div className='select-btn-open' onClick={() => this._handleSelectClick()}>Select button</div>
  }

  _handleRefreshClick = () => {

  }

  _renderRefreshButton = () => {
    const { loadOptions, loadOptionsAsync } = this.props;

    if (loadOptions || loadOptionsAsync)
      return <div className='select-btn-refresh' onClick={() => this._handleRefreshClick()}>Refresh button</div>
  }

  render() {
    return (
      <div>
        {this._renderSelectButton()}
        {this._renderRefreshButton()}
      </div>
    )
  }
}

export default Select