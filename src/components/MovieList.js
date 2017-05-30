import React from 'react'

export default (props) => {
  console.log(props.movieResults.results);
  return(
    <div>
      {props.movieResults.results ?         props.movieResults.results.map(function(movie){
        let posterURL = ''
        if(!movie.poster_path){
          posterURL = 'require("../notFound.jpg")'
        }
        else {
          posterURL= `http://image.tmdb.org/t/p/w185${movie.poster_path}`
        }
        console.log(posterURL);
        return (
          <div key={movie.id} className='col-sm-3'>
            <ul><h2>{movie.title}</h2></ul>
            <ul><h4>Release Date: {movie.release_date}</h4></ul>
            <ul>{movie.overview}</ul>
            <img src={posterURL} />
            {/* onerror=this.src='../notFound.jpg'"/> */}
            {/* <img src={require("../notFound.jpg")}/> */}
              </div>
              )
              }) : null }
              </div>
              )
              }
