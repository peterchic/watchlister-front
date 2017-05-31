import React from 'react'

export default class MovieForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("Im trying to handle submit to add a movie")
    console.log(this.props.movie)
    console.log(this.state.value)
    this.props.handleAddMovie(this.props.movie, this.state.value)
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <select value={this.state.value} onChange={this.handleChange.bind(this)} >
            <option value="" disabled selected>Add to a Watchlist</option>
            {this.props.watchlists.map(function(watchlist){ return <option value={watchlist.id}>{watchlist.name}</option>})}
          </select>
          <input type='submit' value='Add!' />
        </form>
      </div>
    )
}

}
