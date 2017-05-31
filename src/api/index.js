export function fetchWatchlists(){
  return fetch("http://localhost:4000/api/v1/watchlists")
    .then( res => res.json() )
}

// export function updateWatchlist(watchlist) {
//   return fetch("http://localhost:4000/api/v1/watchlists/" + watchlist.id)
//   .then( bunch of other stuff )
// }

export function createList(name, description){
  console.log(name);
  fetch("http://localhost:3000/api/v1/watchlists", {
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
