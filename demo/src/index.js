import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'

import { NavBar, NavBarItem } from '../../src'
import Main from './Main'
import Buttons from './Buttons'
import Tables from './Tables'

class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Image snapshot testing - Demo</h1>
          <NavBar>
            <NavBarItem path="/" title="Main"/>
            <NavBarItem path="/buttons" title="Buttons"/>
            <NavBarItem path="/tables" title="Tables"/>
          </NavBar>
          <Route path="/" exact component={Main}/>
          <Route path="/buttons" component={Buttons}/>
          <Route path="/tables" component={Tables}/>
        </div>
      </BrowserRouter>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
