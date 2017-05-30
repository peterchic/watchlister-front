// Receive a Watchlist as a prop,
// reach out to the API to find movies that are on that Watchlist based on the join table,
// Render out a list of all the movies using the Movie-Card component
// eventually something like this: this.state.movies.map( movie => <MovieCard movie={movie}/> )


import React, { Component } from 'react'

export default class WatchlistShow extends Component {
  
  constructor(props){
    super()

    this.state = {
      emptyString: "",
      watchLists: ""
     }
  };


  componentWillMount() {

   fetch('http://localhost:3000/api/v1/watchlists')
      .then(res => res.json())
      .then((railsDataArr) => this.setState({
                watchLists: railsDataArr
              })
            
          )
   
  }


  render(){
  
   if (this.state.watchLists){
    return(
      <div>
       {this.state.watchLists.map((li,i) => <h1 key={i}>{li.name} {li.description}</h1>)}
      </div>
    )
  } else 
    return <div><h1>LOADING.....</h1></div>
   }

  };

