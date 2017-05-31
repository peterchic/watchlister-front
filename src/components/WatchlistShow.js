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
        <button className='btn btn-danger' onClick={() => props.onDelete(props.watchlist.id)}>Remove</button>
        <ul className="list-group">
          {props.watchlist.movies.map( movie =>
            <div>
            <li className="list-group-item" key={movie.id}><Link to={`/movies/${movie.id}`}><h3>{movie.title}</h3></Link><button type="button" className="btn btn-danger" onClick={() => deleteMovieFromWatchList(movie.id, props.watchlist.id, props)}>Remove</button></li>
          </div>
          )}
        </ul>
      </div>

    </div>
  )
}



function deleteMovieFromWatchList(movieId, watchlistId,props) {

    return fetch(`http://localhost:3000/api/v1/watchlist_movies/${movieId}`, {
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({
        watchlist_movie: {
          movie_id: movieId,
          watchlist_id: watchlistId
        }
      })
    })
    .then( res => res.json())
    .then(()=> props.props.history.push(`/watchlists`))

  }
