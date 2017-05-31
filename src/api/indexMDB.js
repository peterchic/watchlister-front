//Requests to external MDB API

export function MDBapiCall(searchTerm){
  const API_KEY = 'bf0aa3384a6ec0ec139e996381cab539'
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  return fetch(URL)
  .then(response => response.json())
}
