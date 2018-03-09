import React from 'react'
import { shallow } from 'enzyme'
import PageFooter from './PageFooter'

describe('PageFooter', () => {
  const component = shallow(<PageFooter/>)

  it('renders correct', () => {
    expect(component).toMatchSnapshot()
  })
})