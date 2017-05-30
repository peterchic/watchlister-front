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

  createNewList(){
    if(!this.state.inputField){
      this.setState({
        inputField:
        <div>
          <input type='text' placeholder='name' onChange={this.newName.bind(this)}/>
          <input type='text' placeholder='description' onChange={this.newDescription.bind(this)}/>
          <input type="button" value="Submit" onClick={function() { return this.props.createList(this.state.name, this.state.desc)}.bind(this) }  />
          <input type="button" value="Cancel" onClick={this.createNewList.bind(this)}/>
        </div>
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
