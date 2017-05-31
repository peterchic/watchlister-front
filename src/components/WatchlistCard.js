import React from 'react'

export default (props) => {
  let lists = props.watchlists.map(function(list){
    return <li key={list.id}>
      <h1>{list.name}</h1>
      <h3>{list.description}</h3>
    </li>
  })
  return(
    <div>
      <ul>
        {lists}
      </ul>
    </div>
  )
}
