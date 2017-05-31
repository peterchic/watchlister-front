import React from 'react'
import MovieForm from './MovieForm'

export default (props) => {
  const watchlists = props.watchlists


  return(
    <div>
      {props.movieResults.results ? props.movieResults.results.slice(0,3).map(function(movie){
        let posterURL = ''
        if(!movie.poster_path){
          posterURL = "../not_found.jpg"

        }
        else {
          posterURL= `http://image.tmdb.org/t/p/w185${movie.poster_path}`
        }
        return (
          <div className="card col-sm-4">
            <img height="300px" src={posterURL}/>
            <div className="card-block">
              <h4 className="card-title">{movie.title}</h4>
              <p className="card-text">{movie.overview.substring(0, 100)}...</p>
              <MovieForm handleAddMovie={props.handleAddMovie} movie={movie} watchlists={props.watchlists} />
            </div>
          </div>

        )
      }) : null }
          </div>
        )
      }

        // <div className='card'>
        //   <div className='col-sm-6' key={movie.id} className='col-sm-6'>
          //     <div className='card'>
            //       <ul><h2>{movie.title}</h2></ul>
          //     </div>
          //     <ul><h4>Release Date: {movie.release_date}</h4></ul>
          //     <ul>{movie.overview}</ul>
          //     <img className='card-header' src={posterURL} />
              // <MovieForm handleAddMovie={props.handleAddMovie} movie={movie} watchlists={props.watchlists} />
        //   </div>
        // </div>
