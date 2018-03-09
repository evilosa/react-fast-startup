import React from 'react'
import { shallow, mount } from 'enzyme'
import Page from './Page'
import PageFooter from '../PageFooter'

describe('Page', () => {
  it('renders properly', () => {
    const page = shallow(<Page/>)
    expect(page).toMatchSnapshot()
  })

  it('has correct default props', () => {
    const page = mount(<Page/>)
    const props = page.props()
    expect(props.header).toEqual('')
    expect(props.onClose).toBeUndefined()
  })

  describe('with footer', () => {
    const page = shallow(
      <Page>
        <PageFooter>
          <div className='test-footer-content'>Footer content</div>
        </PageFooter>
      </Page>
    )

    it('should render footer', () => {
      expect(page.find('.page-footer').exists()).toBeTruthy();
    })
  })
})