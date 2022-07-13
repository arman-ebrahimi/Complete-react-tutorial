import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () =>{
    const {data:blogs, isLoaded, error} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="Home">
            {error && <div>{error}</div>}
            {isLoaded && <div>Is Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;