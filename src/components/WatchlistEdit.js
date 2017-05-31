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
    console.log("here are my props: ", this.props.watchlist.name)
    return (
      <div className='col-md-8' >
        <h2>EDIT FORM</h2>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <label>Watchlist Name: </label>
          <input type='text' placeholder={this.props.watchlist.name} value={this.state.name} onChange={this.handleNameInputChange} />
          <label>Description: </label>
          <input type='text' value={this.state.description} onChange={this.handleDescInputChange} />
          <input type='submit' value='Submit Changes' />
        </form>
      </div>
    )
  }
}
//
// StudentEdit.defaultProps = {
//   watchlist: {name: ''}
// }

export default WatchlistEdit
