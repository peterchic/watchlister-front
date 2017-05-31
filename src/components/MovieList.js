import React from 'react'
import MovieForm from './MovieForm'
var selectedValue = 0

export default (props) => {
  const watchlists = props.watchlists


  return(
    <div>
      {props.movieResults.results ? props.movieResults.results.map(function(movie){
        let posterURL = ''
        if(!movie.poster_path){
          posterURL = 'require("../notFound.jpg")'
        }
        else {
          posterURL= `http://image.tmdb.org/t/p/w185${movie.poster_path}`
        }
      return (
         <div key={movie.id} className='col-sm-3'>
           <ul><h2>{movie.title}</h2></ul>
           <ul><h4>Release Date: {movie.release_date}</h4></ul>
            <ul>{movie.overview}</ul>
          <img src={posterURL} />
          <MovieForm handleAddMovie={props.handleAddMovie} movie={movie} watchlists={props.watchlists} />
        </div>
        )
        }) : null }
    </div>
  )
}
