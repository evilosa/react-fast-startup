import React from 'react'
import { shallow } from 'enzyme'
import PageContent from './PageContent'

describe('PageContent', () => {
  const component = shallow(<PageContent/>)

  it('renders correct', () => {
    expect(component).toMatchSnapshot()
  })
})