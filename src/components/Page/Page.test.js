import React from 'react'
import { shallow, mount } from 'enzyme'
import Page from './Page'
import PageContent from '../PageContent'
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

  describe('with header', () => {
    const page = shallow(
      <Page
        header='Test header'
      >
      </Page>
    )

    it('should render correct header', () => {
      expect(page.contains(<h1>Test header</h1>)).toBeTruthy()
    })
  })

  describe('onClose button', () => {
    it('should render and be able to click if provided', () => {
      const onClick = jest.fn();
      const page = shallow(
        <Page
          onClose={onClick}
        >
        </Page>
      )

      page.find('button').simulate('click')
      expect(onClick.mock.calls.length).toEqual(1)
    })

    it('should not be rendered if function is not provided', () => {
      const page = shallow(<Page/>)
      expect(page.find('button').length).toEqual(0)
    })
  })

  describe('with content', () => {
    const page = shallow(
      <Page>
        <PageContent>
          <div className='test-page-content'>Footer content</div>
        </PageContent>
      </Page>
    )

    it('should render empty footer', () => {
      expect(page.find('.page-footer').exists()).toBeTruthy()
    })

    it('should render content', () => {
      expect(page.find('.page-content').exists()).toBeTruthy()
    })

    it('should render content children', () => {
      expect(page.find('.test-page-content').exists()).toBeTruthy()
    })
  })

  describe('with footer', () => {
    const page = shallow(
      <Page>
        <PageFooter>
          <div className='test-footer-content'>Footer content</div>
        </PageFooter>
      </Page>
    )

    it('should render empty content', () => {
      expect(page.find('.page-content').exists()).toBeTruthy()
    })

    it('should render footer', () => {
      expect(page.find('.page-footer').exists()).toBeTruthy()
    })

    it('should render footer children', () => {
      expect(page.find('.test-footer-content').exists()).toBeTruthy()
    })
  })

  describe('with wrong children', () => {
    const component =
      <Page>
        <div>Wrong children</div>
      </Page>

    it('should throw error', () => {
      expect(() => shallow(component)).toThrow();
    })
  })
})