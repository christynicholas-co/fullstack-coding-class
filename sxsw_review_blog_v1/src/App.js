

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create'
import Reviews from './Reviews'
import Map from './Map'
import About from './About'
import BlogDetails from './BlogDetails';
import Events from './Events';
import NotFound from './NotFound';
import Feed from './Feed';


function App() {
const title = 'Welcome to the new blog';
const likes = 50;

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">

          <Switch> 
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/reviews">
              <Reviews />
            </Route>

            <Route path="/map">
              <Map />
            </Route>

            <Route path="/create">
              <Create />
              </Route>

              <Route path="/feed">
              <Feed />

              </Route>

              <Route exact path="/events">
                 <Events />
            </Route>

            <Route path="/about">
              <About />
            </Route>

    
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>

          </div>
      </div>
    </Router>
  );
}

export default App;
