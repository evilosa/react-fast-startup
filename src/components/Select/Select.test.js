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
})