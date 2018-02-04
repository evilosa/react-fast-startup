import React, {Component} from 'react'
import {render} from 'react-dom'

import Layout from '../../src/Layout';
// import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-fast-startup Demo</h1>
      <div>Her</div>
      <Layout>
        <div>Data 1</div>
        <div>Data 2</div>
        <div>Data 3</div>
      </Layout>
      <Layout direction="vertical">
        <div>Data 1</div>
        <div>Data 2</div>
        <div>Data 3</div>
      </Layout>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'));
