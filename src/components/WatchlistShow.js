import React from 'react'
import {Link, Switch, Route } from 'react-router-dom'
import MovieShow from './MovieShow'
export default function WatchlistShow(props) {


  if (!props.watchlist) {
    return (
      <h1>Loading the Show Page</h1>
      )
  }
  return (
    <div className="AllWL">
      <div col-md-3>
        <h1>{props.watchlist.name}</h1>
        <h1>{props.watchlist.description}</h1>
        <Link className="btn btn-primary" to={`/watchlists/${props.watchlist.id}/edit`}>Edit Watchlist</Link>
        <button className='btn btn-danger' onClick={() => props.onDelete(props.watchlist.id)}>Delete</button>
        <span>
          {props.watchlist.movies.map( movie =>
            <Link to={`/movies/${movie.id}`}><li key={movie.id}>{movie.title}</li></Link>
          )}
        </span>
      </div>

    </div>
  )
}
