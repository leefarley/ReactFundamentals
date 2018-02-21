import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <li><NavLink to="/">Home</NavLink ></li>
          <li><NavLink to="/page-one">Page One</NavLink ></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
