//an individual movie show page
import React from "react";

export default function MovieShow(props) {
  if (!props.movie) {
    return (
      <h1>Loading the Show Page</h1>
      )
  }
  return (
    <div>
      <h1>MADE IT TO MOVIE SHOW PAGE</h1>
      <h1>{props.movie.title}</h1>
    </div>
  )
}
