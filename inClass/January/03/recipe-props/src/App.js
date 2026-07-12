import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import navbar from './components/navbar';
import 'bootstrap/dist/js/popper.min.js';


function App() {
  return (
    <div className="App">
      <navbar/>
      <RecipeList/>
    </div>
  );
}

export default App;
