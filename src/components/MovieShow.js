//an individual movie show page
import React from "react";

export default function MovieShow(props) {
  if (!props.movie) {
    return (
      <h1>Loading the Show Page</h1>
      )
  }
  console.log(props.movie);
  return (
    <div>
      <div className='col-md-6'>
        <img className='bigPoster' src={`http://image.tmdb.org/t/p/w342${props.movie.poster}`}/>
      </div>
      <div className='col-md-6'>
        <h1>{props.movie.title}</h1>
        <p>{props.movie.description}</p>
        <h4>Release Date: {props.movie.release_date}</h4>
      </div>
    </div>
  )
}
