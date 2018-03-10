import * as React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    value: '',
    options: [],
  };

  constructor(props) {
    super(props)

    const { options, value } = this.props;

    this.state = {
      isLoading: false,
      options,
      value,
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

    if (nextProps.value !== this.props.value)
    {
      this.setState(prev => ({
        ...prev,
        value: nextProps.value,
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
    this.setState(
      prev => ({
        ...prev,
        options: [],
      }),
      () => {
        const { loadOptions, loadOptionsAsync } = this.props;
        loadOptions && loadOptions()
        loadOptionsAsync && loadOptionsAsync()
      })
  }

  _renderRefreshButton = () => {
    const { loadOptions, loadOptionsAsync } = this.props;

    if (loadOptions || loadOptionsAsync)
      return <div className='select-btn-refresh' onClick={() => this._handleRefreshClick()}>Refresh button</div>
  }

  _renderCleanButton = () => {
    const { value } = this.state;

    if (value)
      return <div className='select-btn-clean'>Clean button</div>
  }

  render() {
    const { loadOptions, loadOptionsAsync } = this.props;

    if (loadOptions && loadOptionsAsync)
      throw new Error('Select component should have only one of functions "loadOptions" or "loadOptionsAsync"');

    return (
      <div>
        {this._renderSelectButton()}
        {this._renderRefreshButton()}
        {this._renderCleanButton()}
      </div>
    )
  }
}

export default Select