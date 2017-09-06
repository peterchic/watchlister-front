// Requests to our Rails API

const baseUrl = "https://git.heroku.com/watchlister-back.git"

export function getWatchlists(){
  return fetch(`${baseUrl}/watchlists`)
  .then(res => res.json())
}

export function createList(name, description){
    return fetch(`${baseUrl}/watchlists`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        watchlist: {
          name: name,
          description: description
        }
      })
    })
    .then( res => res.json())
  }

export function getMovies() {
    return fetch(`${baseUrl}/movies`)
    .then(res => res.json())
  }

export function createJoin(movie, watchlistId){
  return fetch(`${baseUrl}/watchlist_movies`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      watchlist_movie: {watchlist_id: watchlistId, movie: movie }
    })
  })
  .then(res => res.json())
}

export function editWatchlist(id, name, description){
    return fetch(`${baseUrl}/watchlists/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        watchlist: {
          name: name,
          description: description
        }
      })
    })
    .then( res => res.json())
  }

export function deleteWatchlist(id){
  return fetch(`${baseUrl}/watchlists/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}

export function deleteWatchlistMovie(movieId, watchlistId) {
  console.log('delete movies from list: ', movieId, watchlistId);
    return fetch(`${baseUrl}/api/v1/watchlist_movies/${movieId}`, {
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
    // .then(()=> props.props.history.push(`/watchlists`))
  }
