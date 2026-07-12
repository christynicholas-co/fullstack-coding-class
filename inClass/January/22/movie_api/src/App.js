import {Component} from 'react';
import './App.css';
import keys from './config/keys'

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    movies:[],
  };
}
 performSearch = searchTerm => {
  const url = `https://api.themoviedb.org/3`;
  const movieRoute = `/search/movie?api_key=${keys.tmdb_api_key}&query=${searchTerm}`;
const endpoint = url + movieRoute;

fetch(endpoint)
   .then(response => {
     return response.json()
   })
   
   .then(searchResults => {
     //do something with searchResults
     if(searchResults.results){
      // setMovies(searchResults.results)
       this.setState({movies: searchResults.results}) 
     }
   })
   .catch(error =>{
     console.error('Error coming from API:  ', error);
   })
}

searchChangeHandler = event => {
 console.log("I am the event", event.target.value);
 this.performSearch(event.target.value)
}

render(){
  return(
      <div>
        <h1>Movie Search</h1>
        <input
          type="text"
          placeholder="enter your movie"
          id="inputField"
          onChange={this.searchChangeHandler}></input>
        {this.state.movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="poster"
            />
            {movie.title}
            <br></br>
            <p>Summary: {movie.overview}</p>
            <br></br>
            <p>Release date: {movie.release_date}</p>
            <br></br>
            <p>Average score: {movie.vote_average} out of 10.</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;