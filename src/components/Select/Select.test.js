import React from 'react'
import { shallow } from 'enzyme'
import Select from './Select'

describe('Select', () => {
  it('renders properly', () => {
    const component = shallow(<Select/>)
    expect(component).toMatchSnapshot()
  })

  it('has correct default state', () => {
    const component = shallow(<Select/>)
    const state = component.state()
    expect(state.isLoading).toBeFalsy()
    expect(state.options).toEqual([])
    expect(state.isOptionsVisible).toBeFalsy()
  })

  describe('component select button', () => {
    const component = shallow(<Select/>)

    it('should be visible if state.isOptionsVisible=false', () => {
      expect(component.state().isOptionsVisible).toBeFalsy()
      expect(component.find('.select-btn-open').length).toEqual(1)
    })

    it('should be invisible if state.isOptionsVisible=true', () => {
      component.setState({isOptionsVisible: true})
      expect(component.state().isOptionsVisible).toBeTruthy()
      expect(component.find('.select-btn-open').length).toEqual(0)
    })

    xit('should call handleSelect when clicked')
    xit('should change state.isOptionsVisible to true when clicked')
  })

  describe('component refresh button', () => {
    xit('should be visible if loadOptions function is defined')
    xit('should be visible if loadOptionsAsync function is defined')
    xit('should be invisible if loadOptions is undefined')
    xit('should be invisible if loadOptionsAsync is undefined')
    xit('should call handleRefresh when clicked')
    xit('should clean options and call loadOptions if clicked and function is defined')
    xit('should clean options and call loadOptionsAsync if clicked and function is defined')
  })

  describe('component clear button', () => {
    xit('should be visible if value defined')
    xit('should be invisible if value undefined')
    xit('should call handleClear when clicked')
    xit('should clear value and call onValueChange when clicked')
  })

  describe('component input', () => {
    xit('should be visible if loadOptions function is defined')
    xit('should be visible if loadOptionsAsync function is defined')
    xit('should be invisible if options is defined')
    xit('should be visible if state.isOptionsVisible=true')
    xit('should be invisible if state.isOptionsVisible=false')
    xit('should be disabled if state.isLoading=true')
    xit('should be enabled if state.isLoading=false')
    xit('should call handleSearch function when user input something')
    xit('should call loadOptions after user input if function defined')
    xit('should call loadOptionsAsync after user input if function defined')
  })

  describe('options list', () => {
    xit('should be displayed if state.isOptions.Visible=true')
    xit('should not be displayed if state.isOptions.Visible=false')
    xit('should call handleSelect function after click on item ')
    xit('should call onValueChange function after click on item')
    xit('should receive max 50 items')
  })

  describe('function', () => {
    xit('shouldComponentUpdate() should return false if state have the same value as prop')
    xit('loadOptions should update options in synchronous mode')
    xit('loadOptionsAsync should initiate receive new "options" prop after calling')
  })
})