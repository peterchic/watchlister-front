import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import WatchlistContainer from './components/WatchlistContainer'
import WatchlistShow from './components/WatchlistShow'
// import SearchForm
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
//
class App extends Component {
  render() {  
    return (
      <BrowserRouter>
        <div className="App">
          
          <Switch>
            <Route exact path='/' component={WatchlistContainer} />
            <Route path='/watchlists' component={WatchlistShow} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
