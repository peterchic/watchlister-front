import React from 'react'

class WatchlistEdit extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: ''
     }

    this.handleNameInputChange = this.handleNameInputChange.bind(this)
    this.handleDescInputChange = this.handleDescInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentWillReceiveProps(props){
  //   this.setState({
  //     name: props.watchlist.name,
  //     description: props.watchlist.description
  //   })
  // }
  //
  handleNameInputChange(e){
    const name = e.target.value
    this.setState((state, props) => {
      return {
        name: name
      }
    })
  }
  handleDescInputChange(e){
    const description = e.target.value
    this.setState((state, props) => {
      return {
        description: description
      }
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleUpdateWatchlist(this.props.watchlist.id, this.state.name, this.state.description)
  }

  render(){
    if (!this.props.watchlist) {
      return null
    }
    return (
      <div className='col-md-8' >
        <h2>Edit {this.props.watchlist.name}</h2>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className="form-group">
            <label>Watchlist Name: </label>
            <input type='text' className="form-control" placeholder={this.props.watchlist.name} value={this.state.name} onChange={this.handleNameInputChange} />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type='text' className="form-control" placeholder={this.props.watchlist.description} value={this.state.description} onChange={this.handleDescInputChange} />
          </div>
            <input type='submit' className="btn btn-primary" value='Submit Changes' />
        </form>
      </div>
    )
  }
}



export default WatchlistEdit
