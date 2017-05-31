import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import WatchlistContainer from './containers/WatchlistContainer'
import WatchlistsPage from './components/WatchlistsPage'
import WatchlistShow from './components/WatchlistShow'
import NavBar from './components/NavBar'
// import SearchForm
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
//
export default () => {
    return (
      <div className="container-fluid">
          <NavBar title="Watchlister" color="black" />
          <div className="container">
          <Switch>
            <Route path='/' component={WatchlistContainer} />
            <Route exact path='/about' render={() => <h1>This is the about page</h1>}/>
          </Switch>
        </div>
        </div>
   );
}
