import React from 'react'

export default (props) => {
  return(
    <div>
      <input type='text' onChange={props.handleChange} placeholder={"Search for Movies"}/>
      <button value="Search" onClick={props.handleSubmit} />
    </div>
  )
}



