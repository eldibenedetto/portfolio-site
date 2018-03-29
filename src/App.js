import React, { Component } from 'react';
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Connect from './components/Connect'
import Projects from './components/Projects'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/connect' component={Connect} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
