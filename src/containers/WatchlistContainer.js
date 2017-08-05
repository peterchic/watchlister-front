import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getWatchlists, createJoin, createList, editWatchlist, deleteWatchlist, getMovies, deleteMovie } from '../api/indexRailsAPI'
import { MDBapiCall } from '../api/indexMDB'
import WatchlistsPage from '../components/WatchlistsPage'



export default class WatchlistContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      movieResults: false,
      watchlists: [],
      searchTerm: '',
      movies: []
    }
  }

  handleChange(e){
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearch(searchTerm) {
    MDBapiCall(searchTerm)
    .then( data => this.setState({ movieResults: data }))
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
    }))
    getMovies()
   .then(res => this.setState ({
     movies: res
   }))
  }

  handleAddMovie(movie, watchlistId){
    createJoin(movie, watchlistId)
    .then( updatedWatchlist => {
      const newWatchlists = this.state.watchlists.map( wl => {
        if (wl.id === updatedWatchlist.id ) {
          return updatedWatchlist
        } else { return wl }
        })
      this.setState({watchlists: newWatchlists})
      }
      )
    }

  handleUpdateWatchlist(id, name, description){
    editWatchlist(id, name, description)
    .then( updatedWatchlist => {
      const newWatchlists = this.state.watchlists.map( wl => {
        if (wl.id === updatedWatchlist.id ) {
          return updatedWatchlist
        } else { return wl }
        })
      this.setState({watchlists: newWatchlists})
      }
      )
    }

  handleDelete(id, movies){
    deleteWatchlist(id)
    .then( deletedWatchlist => {
      const newWatchlists = this.state.watchlists.filter( wl => {
        if (wl.id === deletedWatchlist.id ) {
          return false
        } else {
          console.log('wtf', wl);
          return true
        }
      })
      this.setState({watchlists: newWatchlists})
      })
    }

    handleDeleteMovie(movieId, watchlistId){
      deleteMovie(movieId, watchlistId)
      .then( deletedMovie => {
        const newMovieList = this.state.movies.filter( movie => {
          if (movie.id === deletedMovie.id ) {
            return false
          } else {
            return true
          }
        })
        this.setState({movies: newMovieList})
        })
      }

  render() {
    return (
      <div>
        <WatchlistsPage watchlists={this.state.watchlists}
                        movies={this.state.movies}
                        handleDelete={this.handleDelete.bind(this)}
                        handleUpdateWatchlist={this.handleUpdateWatchlist.bind(this)}
                        handleCreateList={this.handleCreateList.bind(this)}
                        handleSearch={this.handleSearch.bind(this)}
                        handleChange={this.handleChange.bind(this)}
                        movieResults={this.state.movieResults}
                        handleAddMovie={this.handleAddMovie.bind(this)}
                        handleDeleteMovie={this.handleDeleteMovie.bind(this)}
                      />
      </div>
    )
  }
}
