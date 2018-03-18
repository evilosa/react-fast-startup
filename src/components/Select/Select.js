import * as React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import style from './style'

class Select extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.object,
    loadOptionsAsync: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    value: { id: undefined, title: undefined },
    options: [],
  };

  constructor(props) {
    super(props)

    const { options, value } = this.props;

    this.state = {
      isLoading: false,
      options: options.slice(0, 50),
      value,
      isOptionsVisible: false
    }
  }

  componentDidMount() {
    const { options } = this.state

    if (options.length === 0) {
      this._loadOptions()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options)
    {
      this.setState(prev => ({
        ...prev,
        options: nextProps.options.slice(0, 50),
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

  _loadOptions = () => {
    const { value } = this.state
    const { loadOptions, loadOptionsAsync } = this.props

    loadOptions && this.setState(prev => ({
      ...prev,
      options: loadOptions(value),
    }))

    loadOptionsAsync && loadOptionsAsync(value)
  }

  _handleRefreshClick = () => {
    this.setState(
      prev => ({
        ...prev,
        options: [],
      }),
      () => {
        this._loadOptions()
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
        value: { id: undefined, title: undefined },
      }),
      () => {
        const { onValueChanged } = this.props
        onValueChanged && onValueChanged('')
      })
  }

  _renderCleanButton = () => {
    const { value } = this.state

    if (value.title)
      return <div className='select-btn-clean' onClick={() => this._handleCleanClick()}>Clean button</div>
  }

  _renderValueText = () => {
    const { isOptionsVisible, value: { title } } = this.state

    if (!isOptionsVisible)
      return <div
        className='select-value-text'
        style={style.value}
      >{title}</div>
  }

  _renderOptionsList = () => {
    const { isOptionsVisible } = this.state

    if (isOptionsVisible) {
      const { options } = this.state;
      return (
        <div className='select-options-list'>
          {options && options.map((item, key) => this._renderOptionsListItem(key, item))}
        </div>
      )
    }
  }

  _handleOptionsListItemClick = (value) => {
    const { onValueChange } = this.props
    onValueChange && onValueChange(value)

    this.setState(prev => ({
      ...prev,
      value,
      isOptionsVisible: false,
    }))
  }

  _renderOptionsListItem = (key, item) => {
    const { title } = item;
    return (
      <div
        className='select-options-list-item'
        key={key}
        onClick={() => this._handleOptionsListItemClick(item)}
      >
        {title}
      </div>
    )
  }

  _handleSearch = value => {
    this.setState(
      prev => ({
        ...prev,
        value,
      }),
      () => this._loadOptions())
  }

  _renderSearchInput = () => {
    const { isOptionsVisible, isLoading } = this.state;
    const { loadOptions, loadOptionsAsync } = this.props

    if (isOptionsVisible && (loadOptions || loadOptionsAsync))
      return <input className='select-search-input' enabled={!isLoading} onChange={event => this._handleSearch(event.currentTarget.value)}/>
  }

  render() {
    const { loadOptions, loadOptionsAsync, title } = this.props

    if (loadOptions && loadOptionsAsync)
      throw new Error('Select component should have only one of functions "loadOptions" or "loadOptionsAsync"')

    return (
      <div style={style.root}>
        <div style={style.title}>
          {title}
        </div>
        {this._renderValueText()}
        {this._renderSelectButton()}
        {this._renderRefreshButton()}
        {this._renderCleanButton()}
        {this._renderOptionsList()}
        {this._renderSearchInput()}
      </div>
    )
  }
}

export default Radium(Select)