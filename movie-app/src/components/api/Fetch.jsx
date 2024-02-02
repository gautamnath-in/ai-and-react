import { useContext, useEffect } from "react";
import { Context } from "../../interChangingData/Context";

const Fetch = () => {
    // const [movies, setMovies] = useState([]); Moved to Provider

    const { setMovies } = useContext(Context)

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=14d9b8074098217511e35ec624c745ec"
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                console.log(data.results);
            });
    }, []);
}

export default Fetch;