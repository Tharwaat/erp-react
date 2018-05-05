import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUS from './components/ContactUs'
import Biography from './components/Biography'
import CallMedia from './components/CallMedia'
import events from './components/Events'
import MediaTraining from './components/MediaTraining'
import md1 from './components/md1'
import md2 from './components/md2'
import Articles from './components/Articles'
import ArticlesDetails from './components/ArticlesDetails'




import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
        <Navbar img="/res/Logo.png" dots="/res/Dots.png"/>

      
        <Switch>
          <Route exact path='/' render={() => <div>Home</div>}/>
          <Route exact path='/biography' component={Biography}/>
          <Route exact path='/contact' component={ContactUS}/>
          <Route exact path='/events' component={events}/>
          <Route exact path='/media' component={MediaTraining}/>
          <Route exact path='/md1' component={md1}/>
          <Route exact path='/md2' component={md2}/>
          <Route exact path='/articles' component={Articles}/>
           <Route exact path='/articlesDetails' component={ArticlesDetails}/>
        </Switch>

          
        

        <Footer/>
       
      </div>
    );
  }
}

export default App;
