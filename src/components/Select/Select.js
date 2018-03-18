import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Radium from 'radium'
import style from './style'

export class Select extends React.Component {

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
    this.setState(prev => ({
      ...prev,
      options: nextProps.options.slice(0, 50),
      value: nextProps.value !== this.props.value ? nextProps.value : prev.value
    }))
  }

  _isOptionsDifferent = (array1, array2) => {
    let result = array1.length !== array2.length

    if (!result) {
      for (let i = 0; i < array1.length; i++) {
        result = result || array1[i].id !== array2[i].id
        result = result || array1[i].title !== array2[i].title
      }
    }

    return result;
  }

  shouldComponentUpdate(nextProps, nextState) {
    let result = false

    result = result || nextProps.value !== this.props.value
    result = result || this._isOptionsDifferent(nextProps.options, this.props.options)

    result = result || nextState.isLoading !== this.state.isLoading
    result = result || this._isOptionsDifferent(nextState.options, this.state.options)
    result = result || this._isOptionsDifferent(nextProps.options, this.state.options)
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
      return <Button type='small' className='select-btn-open' onClick={() => this._handleSelectClick()}>...</Button>
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
      return <Button type='small' className='select-btn-refresh' onClick={() => this._handleRefreshClick()}>R</Button>
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
      return <Button type='small' className='select-btn-clean' onClick={() => this._handleCleanClick()}>X</Button>
  }

  _renderValueText = () => {
    const { value: { title } } = this.state

    return <div style={{flex: '1 0'}}
    >
      <div style={style.value} className='select-value-text'>{title}</div>
      {this._renderOptionsList()}
    </div>
  }

  _renderOptionsList = () => {
    const { isOptionsVisible } = this.state

    if (isOptionsVisible) {
      const { options } = this.state;
      return (
        <div
          className='select-options-list'
          style={style.optionsList}
        >
          {this._renderSearchInput()}
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
      return <input className='select-search-input' enabled={(!isLoading).toString()} onChange={event => this._handleSearch(event.currentTarget.value)}/>
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
      </div>
    )
  }
}

export default Radium(Select)