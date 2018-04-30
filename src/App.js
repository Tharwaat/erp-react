import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUS from './components/ContactUs'


class App extends Component {
  render() {
    return (
      <div className="App">
       
      
      
        <Navbar img="/res/Logo.png" dots="/res/Dots.png"/>
        
        <Footer/>
       
      </div>
    );
  }
}

export default App;
