import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Page not found</h2>
            <p>This page not exist</p>
            <Link to="/"><button>Go to home page...</button></Link>
        </div>
    )
}

export default NotFound;