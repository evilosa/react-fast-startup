import React from 'react'
import { shallow } from 'enzyme'
import TableColumn from './TableColumn'

describe('TableColumn', () => {
  const component = shallow(<TableColumn/>)

  it('renders correct', () => {
    expect(component).toMatchSnapshot()
  })
})