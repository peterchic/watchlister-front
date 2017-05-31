import React from 'react'

export default class MovieForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleAddMovie(this.props.movie, this.state.value)
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <select className="form-control" value={this.state.value} onChange={this.handleChange.bind(this)} >
            <option className="selectpicker" value="" disabled selected>Add to a Watchlist</option>
            {this.props.watchlists.map(function(watchlist){ return <option key={watchlist.id} value={watchlist.id}>{watchlist.name}</option>})}
          </select>
          <input className='btn btn-success btn-block' type='submit' value='Add!' />
        </form>
      </div>
    )
}

}
