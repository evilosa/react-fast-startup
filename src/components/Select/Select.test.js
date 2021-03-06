import React from 'react'
import { shallow, mount } from 'enzyme'
import Select from './Select'
import '../../utils'
import { createSelectStyle } from './style'

describe('Select', () => {
  const options = [
    { id: 'id1', title: 'value1'},
    { id: 'id2', title: 'value2'},
  ]

  const value = {id: '0', title: 'SomeValue'};

  it('renders properly', () => {
    const component = shallow(<Select/>)
    expect(component).toMatchSnapshot()
  })

  it('should have correct style', () => {
    expect(createSelectStyle()).toMatchSnapshot();
  })

  describe('without props', () => {
    const component = mount(<Select/>)
    const props = component.props();

    it('have default empty prop "title"', () => {
      expect(props.title).toEqual('')
    })

    it('have default value for prop "value"', () => {
      expect(props.value).toEqual({ id: undefined, value: undefined })
    })

    it('have default prop "options" equal []', () => {
      expect(props.options).toEqual([])
    })
  })

  describe('default state', () => {
    const component = shallow(<Select/>)
    const state = component.state()

    it('for isLoading is false', () => {
      expect(state.isLoading).toBeFalsy()
    })

    it('for value is empty', () => {
      expect(state.value).toEqual({ id: undefined, value: undefined })
    })

    it('for options equal []', () => {
      expect(state.options).toEqual([])
    })

    it('for isOptionsVisible is false', () => {
      expect(state.isOptionsVisible).toBeFalsy()
    })
  })

  describe('prop', () => {
    it('options set to state.options in constructor', () => {
      const component = shallow(<Select options={options}/>)
      expect(component.state().options).toEqual(options)
    })

    it('new options should update state.options', () => {
      const component = mount(<Select options={options}/>)
      const newOptions = [{ id: 'id3', title: 'value3' }]

      component.setProps({ options: newOptions })
      expect(component.state().options).toEqual(newOptions)
    })

    it('value set to state.value in constructor', () => {
      const component = shallow(<Select value={value}/>)
      expect(component.state().value).toBe(value)
    })

    it('new value should update state.value', () => {
      const component = mount(<Select value={{ id: 0, title: 'defValue'}}/>)
      component.setProps({ value: value })
      expect(component.state().value).toEqual(value)
    })

    it('should call componentWillReceiveProps when receive new', () => {
      const component = mount(<Select options={options}/>)
      const instance = component.instance()
      const spy = jest.spyOn(instance, 'componentWillReceiveProps')

      expect(spy).not.toHaveBeenCalled()
      component.setProps({ someDifferentProp: 1 })
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('component select button', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Select/>)
    })

    it('should be visible if state.isOptionsVisible=false', () => {
      expect(component.state().isOptionsVisible).toBeFalsy()
      expect(component.find('.select-btn-open').length).toEqual(1)
    })

    it('should be invisible if state.isOptionsVisible=true', () => {
      component.setState({isOptionsVisible: true})
      expect(component.state().isOptionsVisible).toBeTruthy()
      expect(component.find('.select-btn-open').length).toEqual(0)
    })

    it('should call _handleSelectClick when clicked', () => {
      const instance = component.instance();
      const button = component.find('.select-btn-open')
      const spy = jest.spyOn(instance, '_handleSelectClick')

      expect(spy).not.toHaveBeenCalled()
      button.simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    it('should change state.isOptionsVisible to true when clicked', () => {
      const button = component.find('.select-btn-open')

      expect(component.state().isOptionsVisible).toBeFalsy()
      button.simulate('click')
      expect(component.state().isOptionsVisible).toBeTruthy()
    })
  })

  describe('component refresh button', () => {
    it('should be visible if loadOptions function is defined', () => {
      const loadOptionsFn = jest.fn()
      loadOptionsFn.mockReturnValue([])
      const component = shallow(<Select loadOptions={loadOptionsFn}/>)

      expect(component.find('.select-btn-refresh').length).toEqual(1)
    })

    it('should be visible if loadOptionsAsync function is defined', () => {
      const loadOptionsAsyncFn = jest.fn();
      const component = shallow(<Select loadOptionsAsync={loadOptionsAsyncFn}/>)

      expect(component.find('.select-btn-refresh').length).toEqual(1)
    })

    it('should not be visible if loadOptions and loadOptionsAsync is undefined', () => {
      const component = shallow(<Select/>)
      expect(component.find('.select-btn-refresh').length).toEqual(0)
    })

    it('should call _handleRefreshClick when clicked', () => {
      const component = shallow(<Select loadOptions={() => []}/>)
      const instance = component.instance();
      const button = component.find('.select-btn-refresh')
      const spy = jest.spyOn(instance, '_handleRefreshClick')

      expect(button.length).toEqual(1)
      expect(spy).not.toHaveBeenCalled()
      button.simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    it('should clean options and call loadOptions if clicked and function is defined', () => {
      const loadOptionsFn = jest.fn()
      loadOptionsFn.mockReturnValue([])
      const component = shallow(<Select loadOptions={loadOptionsFn} options={[{id: 'testId'}]}/>)
      const button = component.find('.select-btn-refresh')

      expect(button.length).toEqual(1)
      button.simulate('click')
      expect(component.state().options).toEqual([])
      expect(loadOptionsFn.mock.calls.length).toEqual(1)
    })

    it('should clean options and call loadOptionsAsync if clicked and function is defined', () => {
      const loadOptionsAsyncFn = jest.fn()
      const component = shallow(<Select loadOptionsAsync={loadOptionsAsyncFn} options={[{id: 'testId'}]}/>)
      const button = component.find('.select-btn-refresh')

      expect(button.length).toEqual(1)
      button.simulate('click')
      expect(component.state().options).toEqual([])
      expect(loadOptionsAsyncFn).toHaveBeenCalled()
    })

    it('should throw error if loadOptions and loadOptionsAsync both defined', () => {
      const component = <Select loadOptions={() => {}} loadOptionsAsync={() => {}}/>
      expect(() => shallow(component)).toThrow()
    })
  })

  describe('component clear button', () => {
    it('should be visible if value defined', () => {
      const component = shallow(<Select value={value}/>)
      expect(component.find('.select-btn-clean').length).toEqual(1)
    })

    it('should be invisible if value undefined', () => {
      const component = shallow(<Select/>)
      expect(component.find('.select-btn-clean').length).toEqual(0)
    })

    it('should call handleClear when clicked', () => {
      const component = shallow(<Select value={value}/>)
      const instance = component.instance();
      const button = component.find('.select-btn-clean')
      const spy = jest.spyOn(instance, '_handleCleanClick')

      expect(button.length).toEqual(1)
      expect(spy).not.toHaveBeenCalled()
      button.simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    it('should clear value and call onValueChange when clicked', () => {
      const onValueChanged = jest.fn()
      const component = shallow(<Select value={value} onValueChanged={onValueChanged}/>)
      const button = component.find('.select-btn-clean')

      expect(button.length).toEqual(1)
      button.simulate('click')
      expect(component.state().value).toEqual({id: undefined, title: undefined})
      expect(onValueChanged).toHaveBeenCalled()
    })
  })

  describe('search input', () => {
    it('should be visible if loadOptions function is defined and state.isOptionsVisible=true', () => {
      const loadOptions = jest.fn()
      loadOptions.mockReturnValue([])
      const component = shallow(<Select loadOptions={loadOptions}/>)
      component.setState({ isOptionsVisible: true })
      expect(component.find('.select-search-input').length).toEqual(1)
    })

    it('should be visible if loadOptionsAsync function is defined and state.isOptionsVisible=true', () => {
      const loadOptions = jest.fn()
      const component = shallow(<Select loadOptionsAsync={loadOptions}/>)
      component.setState({ isOptionsVisible: true })
      expect(component.find('.select-search-input').length).toEqual(1)
    })

    it('should be invisible if loadOptions and loadOptionsAsync is undefined', () => {
      const component = shallow(<Select options={options}/>)
      expect(component.find('.select-search-input').length).toEqual(0)
    })

    it('should be invisible if state.isOptionsVisible=false', () => {
      const loadOptions = jest.fn()
      const component = shallow(<Select options={options} loadOptions={loadOptions}/>)
      expect(component.find('.select-search-input').length).toEqual(0)
    })

    it('should be disabled if state.isLoading=true', () => {
      const loadOptions = jest.fn()
      const component = shallow(<Select options={options} loadOptions={loadOptions}/>)
      component.setState(prev => ({ ...prev, isOptionsVisible: true, isLoading: true }))
      expect(component.find('.select-search-input').props().enabled).toEqual('false')
    })

    it('should be enabled if state.isLoading=false', () => {
      const loadOptions = jest.fn()
      const component = shallow(<Select options={options} loadOptions={loadOptions}/>)
      component.setState(prev => ({ ...prev, isOptionsVisible: true, isLoading: false }))
      expect(component.find('.select-search-input').props().enabled).toEqual('true')
    })

    it('should call _handleSearch with right arguments when user input something', () => {
      const loadOptions = jest.fn()
      loadOptions.mockReturnValue([])
      const component = shallow(<Select options={options} loadOptions={loadOptions}/>)
      const instance = component.instance()
      const spy = jest.spyOn(instance, '_handleSearch')

      component.setState(prev => ({ ...prev, isOptionsVisible: true, isLoading: false }))
      component.find('.select-search-input').prop('onChange')({ currentTarget: { value: 'NewValue'}})
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith('NewValue')

      spy.mockRestore()
    })

    it('should call loadOptions with user value and function defined after onChange', () => {
      const loadOptions = jest.fn()
      loadOptions.mockReturnValue([])
      const component = shallow(<Select options={options} loadOptions={loadOptions}/>)

      component.setState(prev => ({ ...prev, isOptionsVisible: true, isLoading: false }))
      component.find('.select-search-input').prop('onChange')({ currentTarget: { value: 'NewValue'}})
      expect(loadOptions).toHaveBeenCalled()
      expect(loadOptions).toHaveBeenCalledWith('NewValue')
    })

    it('should call loadOptionsAsync after user input if function defined', () => {
      const loadOptions = jest.fn()
      loadOptions.mockReturnValue([])
      const component = shallow(<Select options={options} loadOptionsAsync={loadOptions}/>)

      component.setState(prev => ({ ...prev, isOptionsVisible: true, isLoading: false }))
      component.find('.select-search-input').prop('onChange')({ currentTarget: { value: 'NewValue'}})
      expect(loadOptions).toHaveBeenCalled()
      expect(loadOptions).toHaveBeenCalledWith('NewValue')
    })
  })

  describe('value text', () => {
    it('should be visible if state.isOptionsVisible=false', () => {
      const component = shallow(<Select />)
      expect(component.find('.select-value-text').length).toEqual(1)
    })

    it('should be visible if state.isOptionsVisible=true', () => {
      const component = shallow(<Select />)
      component.setState({isOptionsVisible: true})

      expect(component.state().isOptionsVisible).toBeTruthy()
      expect(component.find('.select-value-text').length).toEqual(1)
    })

    it('should display provided value', () => {
      const component = shallow(<Select value={value}/>)
      const valueTextNode = component.find('.select-value-text')
      expect(valueTextNode.length).toEqual(1)
      expect(valueTextNode).toMatchSnapshot()
    })

    it('should open options list onClick', () => {
      const component = shallow(<Select />)
      const value = component.find('.select-value-text')
      value.simulate('click')
      expect(component.state().isOptionsVisible).toBeTruthy()
      expect(component.find('.select-value-text').length).toEqual(1)
    })
  })

  describe('options list', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Select options={options}/>)
      component.setState({ isOptionsVisible: true })
    })

    it('should be displayed if state.isOptionsVisible=true', () => {
      expect(component.find('.select-options-list').length).toEqual(1)
    })

    it('should not be displayed if state.isOptionsVisible=false', () => {
      component.setState({ isOptionsVisible: false })
      expect(component.find('.select-options-list').length).toEqual(0)
    })

    it('should contain options items in list', () => {
      expect(component.find('.select-options-list-item').length).toEqual(2)
    })

    it('should call _handleOptionsListItemClick function after item click', () => {
      const instance = component.instance()
      const spy = jest.spyOn(instance, '_handleOptionsListItemClick')

      const item = component.find('.select-options-list-item').first()
      expect(item.length).toEqual(1)
      item.prop('onClick')()
      expect(spy).toHaveBeenCalled()

      spy.mockRestore()
    })

    it('should call onValueChange function after click on item', () => {
      const onValueChange = jest.fn()
      component = shallow(<Select options={options} onValueChange={onValueChange}/>)
      component.setState({ isOptionsVisible: true })

      const item = component.find('.select-options-list-item').first()
      expect(item.length).toEqual(1)
      item.prop('onClick')()
      expect(onValueChange).toHaveBeenCalled()
      expect(onValueChange).toHaveBeenCalledWith(options[0])
    })

    it('should set value and state.isOptionsVisible to false after click on options item', () => {
      component = shallow(<Select options={options}/>)
      component.setState({ isOptionsVisible: true })

      const item = component.find('.select-options-list-item').first()
      expect(item.length).toEqual(1)
      item.prop('onClick')()
      expect(component.state().value).toEqual(options[0])
      expect(component.state().isOptionsVisible).toBeFalsy()
    })

    it('should receive max 50 items', () => {
      const newOptions = []
      ;(100).times((item) => { newOptions.push({id: item, title: 'testValue'})})
      component.setProps({options: newOptions})

      expect(component.find('.select-options-list-item').length).toEqual(50)
    })
  })

  describe('function', () => {
    it('shouldComponentUpdate() should return false if state and props have the same values', () => {
      const options = [{ id: 'id1', title: 'value1' }]
      const component = mount(<Select value={value} options={options}/>)
      const instance = component.instance()
      const scuSpy = jest.spyOn(instance, 'shouldComponentUpdate')
      const renderSpy = jest.spyOn(instance, 'render')

      expect(scuSpy).not.toHaveBeenCalled()
      component.setProps({ value, options })
      expect(scuSpy).toHaveBeenCalled()
      expect(renderSpy).not.toHaveBeenCalled()
    })

    it('loadOptions should update options in synchronous mode', () => {
      const firstOptions = [{ id: 'id1', title: 'value1' }]
      const secondOptions = [{ id: 'id2', title: 'value2' }, { id: 'id3', title: 'value3' }]
      const loadOptions = jest.fn();
      loadOptions
        .mockReturnValueOnce(firstOptions)
        .mockReturnValue(secondOptions)

      const component = shallow(<Select loadOptions={loadOptions} />)
      expect(component.state().options.length).toEqual(1)
      const refresh = component.find('.select-btn-refresh')
      refresh.simulate('click')
      expect(component.state().options.length).toEqual(2)
    })

    it('loadOptionsAsync should initiate receive new "options" prop after calling', () => {
      const loadOptionsAsync = jest.fn()
      const component = mount(<Select loadOptionsAsync={loadOptionsAsync} />)

      expect(loadOptionsAsync).toHaveBeenCalled()
      loadOptionsAsync.mockReset();
      const refresh = component.find('.select-btn-refresh')
      refresh.simulate('click')
      expect(loadOptionsAsync).toHaveBeenCalled()
    })
  })

  describe('isOptionsDifferent function', () => {
    it('should return false for same options', () => {
      const component = shallow(<Select/>)
      const instance = component.instance()

      expect(instance._isOptionsDifferent(options, options)).toBeFalsy()
    })

    it('should return true for different options', () => {
      const component = shallow(<Select/>)
      const instance = component.instance()

      expect(instance._isOptionsDifferent(options, [ ...options, ...options])).toBeTruthy()
    })

    it('should return true for options with different values', () => {
      const component = shallow(<Select/>)
      const instance = component.instance()

      expect(instance._isOptionsDifferent(options, { id: '0', title: 'DifferentTitle' })).toBeTruthy()
    })
  })
})