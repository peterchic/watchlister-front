import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WatchlistShow from './WatchlistShow'
import SearchForm from './SearchForm'
import MovieCard from './MovieCard'
import CreateList from './CreateList'
import MovieList from './MovieList'
import { getWatchlists, createJoin, createList } from '../api/indexAPI' 
import AllWatchlists from './AllWatchlists'



export default class WatchlistContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      movieResults: false,
      watchlists: [],
      searchTerm: ''
    }
  }


  handleChange(e){
    this.setState({
      searchTerm: e.target.value
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

  handleCreateList(name, description) {
    createList(name, description)
    .then( watchlist => this.setState( prevState =>  ({ watchlists: [...prevState.watchlists, watchlist] }) ))
    .then( () => this.props.history.push('/watchlists'))
    .catch(e => console.log('error', e))
  }

    componentDidMount() {
      getWatchlists()
      .then( res => this.setState({
        watchlists: res
      }, () => console.log(this.state.watchlists)))
    }


  // onCreateJoin(watchlist, movie){
  //   createJoin(watchlist, movie)
  // }

  render() {
    // debugger
    return (
      <div>
           <AllWatchlists watchlists={this.state.watchlists} />
           <CreateList handleCreateList={this.handleCreateList.bind(this)}/>
           <SearchForm searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
