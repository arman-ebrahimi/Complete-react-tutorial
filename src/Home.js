import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs, setBlogs] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('/db.json')
                .then(res => {
                    if(!res.ok){
                        throw Error("not receive data from server");
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoaded(false);
                    setError(null);
                })
                .catch(err => {
                    setIsLoaded(false);
                    setError(err.message);
                })
        }, 1000)
    }, []);
    return(
        <div className="Home">
            {error && <div>{error}</div>}
            {isLoaded && <div>Is Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;