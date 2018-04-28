import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar img="/res/Logo.png" dots="/res/Dots.png"/>
       
      </div>
    );
  }
}

export default App;
