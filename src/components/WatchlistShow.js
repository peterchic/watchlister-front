// Receive a Watchlist as a prop,
// reach out to the API to find movies that are on that Watchlist based on the join table,
// Render out a list of all the movies using the Movie-Card component
// eventually something like this: this.state.movies.map( movie => <MovieCard movie={movie}/> )


import React, { Component } from 'react'

export default class WatchlistShow extends Component {
  constructor(props){
    super()

    this.state = {
      watchlists: ''
    }
  }

  componentWillReceiveProps(){
    console.log('peter');
    fetch('http://localhost:3000/api/v1/watchlists')
      .then(res => res.json())
      .then(function(railsDataArr) {
        console.log('railsData here: ', railsDataArr);
        this.setState({
        watchlists: railsDataArr
      })
    }.bind(this)
  )
  }

  render(){
    // console.log('Should see show lists here: ', this.state.watchlists);
    return(
      <div>
        {this.state.watchlists}
      </div>
    )
  }
}
