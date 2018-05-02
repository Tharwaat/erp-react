import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUS from './components/ContactUs'
import events from './components/Events'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <Navbar img="/res/Logo.png" dots="/res/Dots.png"/>
        
        <Switch>
          <Route exact path='/' render={() => <div>Home</div>}/>
          <Route exact path='/biography' render={() => <div>Biography</div>}/>
          <Route exact path='/contact' component={ContactUS}/>
          <Route exact path='/events' component={events}/>
        </Switch>
        
        <Footer/>
       
      </div>
    );
  }
}

export default App;
