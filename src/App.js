import React, { Component } from 'react';
import { render } from 'react-dom'
import Home from './home';
import Signup from './signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { TextInput, SideBar } from "react-simple-lib";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
        </Switch>
        </BrowserRouter>
        <SideBar title="Copernicus" menu={[{ name: 'First', path: '/home' }, { name: 'Second', path: '/signup' }]} />
      </div>
    );
  }
}

export default App;
