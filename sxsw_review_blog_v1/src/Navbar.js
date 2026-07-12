import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
<nav className="navbar">

    <h1>The Unofficial SXSWReview</h1>
    <div className="links"></div>
    <Link to="/">Home </Link>
    <Link to="/Map">Party Map </Link>
    <Link to="/Events">Events </Link>
    <Link to="/Reviews">Reviews </Link>
    <Link to="/Feed">Feed </Link>
    <Link to="/About">About </Link>

    <Link to="/Create" style={{
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: "8px"
    }}>  New Event</Link>

</nav>

     );
}
 
export default Navbar;