import {useState} from 'react'
import './App.css';
import keys from './config/keys';


function App() {
  const [ movies, setMovies ] = useState([])
  
const performSearch = (searchTerm) => {
  const url = `https://api.themoviedb.org/3`
  const movieRoute = `/search/movie?api_key=${keys.tmdb_key}&query=${searchTerm}`
  const endpoint = url + movieRoute
  fetch(endpoint)
  .then(response=>{
    return response.json()
  })
  .then(searchResults=>{
    if(searchResults.results){
      setMovies(searchResults.results)
    }
  })
  .catch(error => {
    console.error('Error coming from API: ', error)
  })
}

const searchChangeHandler = event => {
  console.log("I am the event", event.target.value)
  performSearch(event.target.value)}

  return (
    <div>
      <h1>Movie Search</h1>
      <input 
      type="text" 
      placeholder="enter your movie" 
      id="inputField" 
      onChange={searchChangeHandler}
      ></input>
      
      {
        movies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster"/>
            <br></br>
            <h3>{movie.title}</h3>
            <br></br>
            <p>Summary: {movie.overview}</p>
            <br></br>
            <p>Release date:{movie.release_date}</p>
            <br></br>
            <p>Average score: {movie.vote_average} out of 10.</p>
            <br></br>
          </div>
        ))
      }
    </div>
  );
}



export default App;
