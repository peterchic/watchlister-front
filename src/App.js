import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import WatchlistContainer from './components/WatchlistContainer'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
//
class App extends Component {
  render() {
    return (
      
        <div className="App">
          <WatchlistContainer />
        </div>

    );
  }
}

export default App;
