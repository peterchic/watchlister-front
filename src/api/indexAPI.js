export function createWatchlist(list){
  return fetch("http://localhost:3000/api/v1/watchlists", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      watchlist: { watchlists: {name: name, description: description} }
    })
  })
  .then( res => res.json() )
}
