import React from 'react';
import Button from '../../src/Button';

const button = shallow(<Button />);

describe('Button component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<Button/>).exists(<button type="Button333">344</button>)).toBe(true);
  });

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  });

  it('should render to static HTML', function() {
    expect(render(<Button>Her</Button>).text()).toEqual('Her');
  });

  test('render a label', () => {
    const wrapper = shallow(
      <div>Hello Jest!</div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});