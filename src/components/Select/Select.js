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

  shouldComponentUpdate(nextProps, nextState) {
    let result = false

    result = result || nextProps.value !== this.props.value
    result = result || nextProps.options !== this.props.options

    result = result || nextState.isLoading !== this.state.isLoading
    result = result || nextState.options !== this.state.options
    result = result || nextState.value !== this.state.value
    result = result || nextState.isOptionsVisible !== this.state.isOptionsVisible

    return result
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
        const { loadOptions, loadOptionsAsync } = this.props
        loadOptions && loadOptions()
        loadOptionsAsync && loadOptionsAsync()
      })
  }

  _renderRefreshButton = () => {
    const { loadOptions, loadOptionsAsync } = this.props

    if (loadOptions || loadOptionsAsync)
      return <div className='select-btn-refresh' onClick={() => this._handleRefreshClick()}>Refresh button</div>
  }

  _handleCleanClick = () => {
    this.setState(
      prev => ({
        ...prev,
        value: '',
      }),
      () => {
        const { onValueChanged } = this.props
        onValueChanged && onValueChanged('')
      })
  }

  _renderCleanButton = () => {
    const { value } = this.state

    if (value)
      return <div className='select-btn-clean' onClick={() => this._handleCleanClick()}>Clean button</div>
  }

  render() {
    const { loadOptions, loadOptionsAsync } = this.props

    if (loadOptions && loadOptionsAsync)
      throw new Error('Select component should have only one of functions "loadOptions" or "loadOptionsAsync"')

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