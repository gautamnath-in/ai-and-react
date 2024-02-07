import { useContext, useEffect } from "react";
import { Context } from "../../interChangingData/Context";

const Fetch = () => {
    // const [movies, setMovies] = useState([]); Moved to Provider

    const { setMovies } = useContext(Context);
    const { category, setOnDemandMovies } = useContext(Context); //movie category request
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=14d9b8074098217511e35ec624c745ec",
            // `https://api.themoviedb.org/3/movie/${category}?api_key=14d9b8074098217511e35ec624c745ec`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                // console.log(data.results);
            });
    }, []);

    useEffect(() => {
        fetch(
            category == '' ? 'https://api.themoviedb.org/3/movie/now_playing?api_key=14d9b8074098217511e35ec624c745ec'
                : category === 'tv' ? 'https://api.themoviedb.org/3/discover/tv?api_key=14d9b8074098217511e35ec624c745ec'
                    : `https://api.themoviedb.org/3/movie/${category}?api_key=14d9b8074098217511e35ec624c745ec`
        )
            .then((response) => response.json())
            .then((data) => {
                setOnDemandMovies(data.results);
            }).catch(error => console.log(error)); //some issue with -> returning '>' in popular version
    }, [category]);
}

export default Fetch;