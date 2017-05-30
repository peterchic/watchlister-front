import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WatchlistCard from './WatchlistCard'
import SearchForm from './SearchForm'
import MovieCard from './MovieCard'
import CreateList from './CreateList'
import MovieList from './MovieList'
// import WatchlistShow from './WatchlistShow'
// import { createWatchlist }  from '../api/indexAPI'


export default class WatchlistContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      movieResults: false,
      watchlists: [],
      searchTerm: ''
    }
  }



  fetchMDB(e){
    // console.log(e.target.value);
    this.setState(
      { searchTerm: e.target.value }
    , function(){
      console.log(this.state.searchTerm);
    })
  }

  MDBapiCall(){
    const API_KEY = 'bf0aa3384a6ec0ec139e996381cab539'
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`
    fetch(URL)
    .then(response => response.json())
    .then(MDBData => this.setState({ movieResults: MDBData })
    )
  }

  createList(name, description){
    console.log(name, description);
    fetch("http://localhost:3000/api/v1/watchlists", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        watchlist: {
          name: name,
          description: description
        }
      })
    })
    .then( res => res.json())
    .then( () => this.props.history.push('/watchlists'))
    .catch(e => console.log('error', e))
  }

  render() {
    // debugger
    return (
      <BrowserRouter>
        <div>
          <WatchlistCard watchlists={this.state.watchlists} />
          <CreateList createList={this.createList.bind(this)}/>
          <SearchForm handleChange={this.fetchMDB.bind(this)} handleSubmit={this.MDBapiCall.bind(this)} />
          <MovieList movieResults={this.state.movieResults} />
        </div>
    </BrowserRouter>
    )
  }
}
// 'https://image.tmdb.org/t/p/w185/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg'
