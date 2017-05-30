import React from 'react'

export default (props) => {
  return(
    <div>
      <input type='text' onChange={props.handleChange} />
      <input type="button" value="Search" onClick={props.handleSubmit} />
    </div>
  )
}
