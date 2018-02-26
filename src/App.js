import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <span className="menu-item"><NavLink to="/">Home</NavLink ></span>
          <span className="menu-item"><NavLink to="/form-page">Form Page</NavLink ></span>
          <span className="menu-item"><NavLink to="/request-page">Request Page</NavLink ></span>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
