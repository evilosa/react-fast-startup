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

    xit('should be visible if state.isOptionsVisible=false', () => {
      expect(component.find('.select-btn-open').length).toEqual(1)
    })
    xit('should be invisible if state.isOptionsVisible=true')
  })

  describe('component refresh button', () => {
    xit('should be visible if loadOptions function is defined')
    xit('should be visible if loadOptionsAsync function is defined')
    xit('should be invisible if loadOptions is undefined')
    xit('should be invisible if loadOptionsAsync is undefined')
    xit('should call handleRefresh when clicked')
    xit('should call loadOptions if clicked and function is defined')
    xit('should call loadOptionsAsync if clicked and function is defined')
  })

  describe('component clear button', () => {
    xit('should be visible if value defined')
    xit('should be invisible if value undefined')
    xit('should call handleClear when clicked')
    xit('should call onValueChange when clicked')
  })

  describe('component input', () => {
    xit('should be visible if loadOptions function is defined')
    xit('should be visible if loadOptionsAsync function is defined')
    xit('should be invisible if options is defined')
  })
})