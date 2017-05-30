import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WatchlistShow from './WatchlistShow'
import SearchForm from './SearchForm'
import MovieCard from './MovieCard'
import CreateList from './CreateList'
import MovieList from './MovieList'
import { getWatchlists, createJoin, createList, MDBapiCall } from '../api/indexAPI' 
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

  handleSearch(searchTerm) {
    MDBapiCall(searchTerm)
    .then(MDBData => this.setState({ movieResults: MDBData }))
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

  handleAddMovie(movie){
    createJoin(movie)
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
           <SearchForm handleSearch={this.handleSearch.bind(this)} handleChange={this.handleChange.bind(this)} />
           <MovieList watchlists={this.state.watchlists} movieResults={this.state.movieResults} handleAddMovie={this.handleAddMovie.bind(this)} />
      </div>
    )
  }
}
