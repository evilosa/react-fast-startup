import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import { createButtonStyle } from './style';

describe('Button', () => {
  const button = shallow(<Button/>)

  it('renders correct', () => {
    expect(button).toMatchSnapshot()
  })

  it('should call provided function', () => {
    const mockCallBack = jest.fn()

    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>)
    button.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('should have correct style', () => {
    expect(createButtonStyle()).toMatchSnapshot();
  })
})