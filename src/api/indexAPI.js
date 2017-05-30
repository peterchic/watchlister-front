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

export function MDBapiCall(searchTerm){
  const API_KEY = 'bf0aa3384a6ec0ec139e996381cab539'
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  return fetch(URL)
  .then(response => response.json())
}

// export function addMovie(movie){
//   console.log('trying to create movie: ', movie)
// 	return fetch("http://localhost:3000/api/v1/watchlist_movies", {
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



export function createJoin(movie, watchlistId){
  console.log('This is it: ',  movie, watchlistId)
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
  .then( function (res) {console.log(res.json())} )
}



