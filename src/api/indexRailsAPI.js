// Requests to our Rails API 

export function getWatchlists(){
  return fetch('http://localhost:3000/api/v1/watchlists')
  .then(res => res.json())
}

export function createList(name, description){
    return fetch("http://localhost:3000/api/v1/watchlists", {
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


export function createJoin(movie, watchlistId){
  console.log('Creating the join from indexAPI ',  movie, watchlistId)
  return fetch("http://localhost:3000/api/v1/watchlist_movies", {
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
    return fetch(`http://localhost:3000/api/v1/watchlists/${id}`, {
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
  return fetch(`http://localhost:3000/api/v1/watchlists/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}
