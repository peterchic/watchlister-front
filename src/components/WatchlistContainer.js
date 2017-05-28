import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WatchlistCard from './WatchlistCard'
import SearchForm from './SearchForm'
import MovieCard from './MovieCard'
import CreateList from './CreateList'
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

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/watchlists')
      .then(res => res.json())
      .then(railsDataArr => this.setState({
        watchlists: railsDataArr
      })
    )
  }

  // handleAddList(list){
  //   createWatchlist(list)
  //     .then( (listData) => {
  //       console.log(this.state.watchlists);
  //       this.setState( prevState =>  ({ watchlists: [...prevState.watchlists, listData] }) )
  //       // this.setState({Object.assign({}, this.state.watchlists, list)})
  //     })
  //     .catch(err => console.log(err))
  // }



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

  render() {
    // debugger
    return (
      <BrowserRouter>
      <div>
        <WatchlistCard watchlists={this.state.watchlists} />
        <SearchForm handleChange={this.fetchMDB.bind(this)} handleSubmit={this.MDBapiCall.bind(this)} />
        { this.state.movieResults.results ? this.state.movieResults.results.map(function(movie){
          let posterURL= `http://image.tmdb.org/t/p/w185${movie.poster_path}`
          return (
            <span key={movie.id} className='col-sm-3'>
              <ul><h2>{movie.title}</h2></ul>
              <ul><h4>Release Date: {movie.release_date}</h4></ul>
              <ul>{movie.overview}</ul>
              <img src={posterURL} />
              {/* <img src={'https://image.tmdb.org/t/p/w185/{movie.poster_path}'} alt='movie' /> */}
            </span>
          )
        }) : null }
        <CreateList />
      </div>
    </BrowserRouter>
    )
  }
}
// 'https://image.tmdb.org/t/p/w185/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg'
