import React from 'react'
import {Link } from 'react-router-dom'
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
      <Link className="btn btn-primary" to={`/watchlists/${props.watchlist.id}/edit`}>Edit Watchlist</Link>
      <button className='btn btn-danger' onClick={() => props.onDelete(props.watchlist.id)}>Delete</button>
      <ul>
      {props.watchlist.movies.map( movie =>
        <li key={movie.id}>{movie.title}</li>
      )}
      </ul>
    </div>
  )
}
