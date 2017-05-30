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

// export function createMovie(movie){
//   console.log('trying to create movie: ', movie)
// 	return fetch("http://localhost:3000/api/v1/movies", {
// 		headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({
//       movie: {title: movie.title, description: movie.overview, poster: movie.poster_path, release_date: movie.release_date} 
//     })
//   })
//   .then( function (res) {console.log(res.json())} )
// }

export function getWatchlists(){
  return fetch('http://localhost:3000/api/v1/watchlists')
      .then(res => res.json())
  }



export function createJoin(watchlist, movie){
  console.log('trying to create join: ', watchlist.id, movie.id)
  return fetch("http://localhost:3000/api/v1/watchlistmovies", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      watchlist_movie: {watchlist_id: watchlist.id, movie: movie} 
    })
  })
  .then( function (res) {console.log(res.json())} )
}



