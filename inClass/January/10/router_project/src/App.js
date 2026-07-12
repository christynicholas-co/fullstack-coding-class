import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> 
        <Routes>
          <Route path= "/home" element={<Home/>}/>
          <Route path= "/about" element={<About/>}/>
          <Route path= "/contact" element={<Contact/>}/>
        </Routes>
     </div>
    </div>
  );
}

export default App;
