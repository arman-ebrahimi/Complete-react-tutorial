import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error("data is not receive from server");
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsLoaded(false);
                    setError(null);
                })
                .catch(err => {
                    setIsLoaded(false);
                    setError(err.message);
                })
        }, 1000)
    }, [url]);

    return {data, isLoaded, error};
}

export default useFetch;

