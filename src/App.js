import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Card from './components/Card'
import Home from './components/Home'

class App extends Component {
  render() {
    return ( 
          <Router>
            <div id="all">
            <div className="renderingNav">
              <NavBar />
              </div>
              <div className="renderingCard">
              <Card />
              </div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/contacts" component={Contact} />
              </div>
          </Router>
    );
  }
}

export default App;
