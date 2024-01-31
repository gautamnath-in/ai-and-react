import { useState, useEffect } from "react";

const Fetch = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/157336?api_key=14d9b8074098217511e35ec624c745ec')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                console.log(data)
            })
    }, []);
}