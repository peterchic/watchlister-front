import React from 'react'
import WatchlistCard from './WatchlistCard'

class WatchlistContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      watchlists: [{id: 1, name: "Action Favorites", description: "Movies to get the blood pumping!"},
                  {id: 2, name: "Rainy Days", description: "Movies for when you are feeling blue and weather agrees."}]
    }
  }

  render() {
    return (
      <div>
        {this.state.watchlists.map( watchlist => <WatchlistCard watchlist={watchlist}/>)}
      </div>
    )
  }
}

export default WatchlistContainer
