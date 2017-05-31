import { Link, Switch, Route } from 'react-router-dom'
import React from 'react'
import WatchlistShow from './WatchlistShow'
import CreateList from './CreateList'
import WatchlistEdit from './WatchlistEdit'
import SearchForm from './SearchForm'
import MovieList from './MovieList'
import MovieShow from './MovieShow'

export default function WatchlistsPage(props) {
  const watchlistElements = props.watchlists.map((li,i) =>
      <div key={li.id}><Link to={`/watchlists/${li.id}`}><h1>{li.name}</h1></Link></div>)

   if (props.watchlists){
    return(
    <div>
      <div className="col-md-3">
        <CreateList handleCreateList={props.handleCreateList} />
        <h3>Your Watchlists</h3>
        <ul>
          { watchlistElements }
        </ul>
      </div>
      <div className="col-md-8">
        <Switch>
          <Route exact path="/watchlists/search"
            render={()=>
              <div>
                <SearchForm handleSearch={props.handleSearch}
                  handleChange={props.handleChange} />
                <MovieList watchlists={props.watchlists}
                  movieResults={props.movieResults}
                  handleAddMovie={props.handleAddMovie}/>
              </div>}
          />
          <Route exact path="/watchlists/:id" render={ ({match}) => {
            const watchlist = props.watchlists.find(watchlist => watchlist.id === parseInt(match.params.id))
              return <WatchlistShow onDelete={props.handleDelete} watchlist={watchlist}/>
          } }/>
          <Route exact path="/watchlists/:id/edit" render={ ({match}) => {
            const watchlist = props.watchlists.find(watchlist => watchlist.id === parseInt(match.params.id))
              return <WatchlistEdit handleUpdateWatchlist={props.handleUpdateWatchlist} watchlist={watchlist} />
          } }/>
          <Route exact path="/movies/:id" render={ ({match}) => {
            const movie = props.movies.find(movie => movie.id === parseInt(match.params.id))
            return <MovieShow movie={movie}/>
          } }/>
        </Switch>
      </div>
    </div>
    )
  } else
    return <div><h1>LOADING.....</h1></div>
  }
