import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import {render} from 'react-dom'

import { Layout, NavBar, NavBarItem } from '../../src';
import Main from './Main';
import Buttons from './Buttons';

class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
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
          <NavBar>
            <NavBarItem path="/" title="Main"/>
            <NavBarItem path="/buttons" title="Buttons"/>
          </NavBar>
          <Route path="/" exact component={Main}/>
          <Route path="/buttons" component={Buttons}/>
        </div>
      </BrowserRouter>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
