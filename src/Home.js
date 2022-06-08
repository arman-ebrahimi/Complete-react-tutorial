import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs, setBlogs] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => res.json())
                .then(data => {
                    setBlogs(data);
                    setIsLoaded(false);
                });
        }, 1000)
    }, []);
    return(
        <div className="Home">
            {isLoaded && <div>Is Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;