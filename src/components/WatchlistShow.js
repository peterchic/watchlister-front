import React from 'react'

export default function WatchlistShow(props) {


  if (!props.watchlist) {
    return (
      <h1>Loading the Show Page</h1>
      )
  }
  console.log(props.watchlist.movies)
  return (
    <div>
      <h1>{props.watchlist.name}</h1>
      <h1>{props.watchlist.description}</h1>
      <h1>{props.watchlist.id}</h1>
      <ul>
      {props.watchlist.movies.map( movie => 
        <li key={movie.id}>{movie.title}</li>
      )}
      </ul>
    </div>
  )
}
