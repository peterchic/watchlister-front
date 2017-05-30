// takes in one movie as a prop and renders out the relevanat details and ADD MOVIE button
// should be abstracted so that it can render both movies from our rails API and TMDB API

import React from 'react'

export default (props) => {
  return (
    <div>
      <h1>{props.movieObj.title}</h1>
    </div>
  )
}


// export default (props) => {
//   return(
//     <iframe src={`https://www.youtube.com/embed/${props.video}`}  />
//   )
// }
