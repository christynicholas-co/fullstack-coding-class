import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry That's Not Here</h2>
<Link to='/'>Return Home</Link>
        </div>
    )
}

export default NotFound