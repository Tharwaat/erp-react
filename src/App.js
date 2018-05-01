import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUS from './components/ContactUs'
import EarlyLife from './components/Biography'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar img="/res/Logo.png" dots="/res/Dots.png"/>
         <EarlyLife 
           img ="/res/Ellipse.png"
           paragraphs ={
             [
               'Jessy El Murris a multimedia journalist, speaker and moderator with a special interest in social media and Arab youth.',
               'El Murr currently produces and presents Sky News Arabia’s daily segment Taghreedat Al Sabah  which highlights portraits of inspirational young Arabs who have succeeded in making an impact in our digital world.',
               'With over 15 years of media experience, El Murr is a Lebanese-American journalist who has reported for several international TV networks including BBC and Al Jazeera before moving to UAE in 2012.'
             ]
           }
         />

        <Footer/>
       
      </div>
    );
  }
}

export default App;
