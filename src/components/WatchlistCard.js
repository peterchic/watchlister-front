import React from 'react'

export default class WatchlistCard extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1>{this.props.watchlist.name}</h1>
        <h3>{this.props.watchlist.description}</h3>
      </div>
    )
  }
}

//this card will eventually have a link to its cooresponding Watchlist Showpage 
