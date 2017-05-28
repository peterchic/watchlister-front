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

  createNewList(){
    this.setState({
      inputField:
      <div>
        <input type='text' placeholder='name'/>
        <input type='text' placeholder='description'/>
        <input type="button" value="Submit"/>
      </div>
    })
    // this.props.history.push('/students')
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
