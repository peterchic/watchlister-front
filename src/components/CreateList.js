import React, { Component } from 'react'

export default class CreateList extends Component {
  constructor(props){
    super()
    this.state = {
      name: '',
      description: '',
      inputField: ''
    }
  }

  newName(e){
    this.setState({
      name: e.target.value
    })
  }

  newDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e){
  this.props.handleCreateList(this.state.name, this.state.description)
  this.setState({
    inputField: ''
  })
  }

  createNewList(){
    if(!this.state.inputField){
      this.setState({
        inputField:
          <form >
            <div className="form-group">
              <label>New Watchlist Name:</label>
              <input className="form-control" type='text' placeholder='Name' onChange={this.newName.bind(this)}/>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input className="form-control" type='text' placeholder='Description' onChange={this.newDescription.bind(this)}/>
            </div>
            <input type="button" value="Submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this) } />
              <input type="button" className="btn btn-danger" value="Cancel" onClick={this.createNewList.bind(this)}/>

        </form>
            })
    } else {
      this.setState({
        inputField: ''
      })
    }

  }

  render(){
    if(!this.state.inputField){
      return(
        <div>
          <input
            type="button"
            className="btn btn-primary"
            value="Create List"
            onClick={this.createNewList.bind(this)} />
        </div>
      )
    } else {
      return (
        <div>
          {this.state.inputField}
        </div>
      )
    }
  }
}
