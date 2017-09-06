import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getWatchlists, createJoin, createList, editWatchlist, deleteWatchlist, getMovies, deleteWatchlistMovie } from '../api/indexRailsAPI'
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
      })
      this.props.history.push(`/watchlists/${id}`)
    }

  handleDelete(id){
    console.log("going to api", id);
    deleteWatchlist(id)
    .then( deletedWatchlist => {
      console.log("deleted wl", deletedWatchlist);
      const newWatchlists = this.state.watchlists.filter( wl => {
        if (wl.id === deletedWatchlist.id ) {
          return false
        } else {
          return true
        }
      })
      this.setState({watchlists: newWatchlists})
      })
    }

    handleDeleteWatchlistMovie(movieId, watchlistId){
      deleteWatchlistMovie(movieId, watchlistId)
      .then( deletedMovie => {
        let newWatchlists = this.state.watchlists;
        newWatchlists.map((watchlist) => {
          if (watchlist.id === deletedMovie.watchlist_id){
            let deletedMoviePos = watchlist.movies.map(function(movie) {return movie.id; }).indexOf(deletedMovie.movie_id);
            watchlist.movies.splice(deletedMoviePos,1);
          }
        })
        this.setState({watchlists: newWatchlists})
      });
    }

  render() {
    // console.log('container', this.state);
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
                        handleDeleteWatchlistMovie={this.handleDeleteWatchlistMovie.bind(this)}
                      />
      </div>
    )
  }
}
