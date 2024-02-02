import React, { useState, useEffect, useContext } from "react";
import { Context } from "../interChangingData/Context";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

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

    // searched item based on title
    const { searchedValue, setSearchedValue, setSearchBtnText } = useContext(Context);

    // filtreing movie list
    let movieSearchedinList = movies.filter(
        (item) => item.title.toLowerCase() == searchedValue.toLowerCase() || item.title.toLowerCase().match(`${searchedValue.toLowerCase()}`)
    );

    // resting search form 
    function resetSearch() {
        setSearchedValue('');
        setSearchBtnText('Search')
    }

    return (
        <>
            {/* conditional redering based on search  */}
            {searchedValue !== "" ? (
                <>
                    {/* searched term showcase */}
                    <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-2">
                        <p className="text-sm font-medium">You searched for &rarr;</p>
                        <div className="rounded-full bg-white p-1 px-2">
                            <p className="text-sm font-medium">{searchedValue}</p>
                        </div>
                        <button
                            onClick={resetSearch}
                            type="button"
                            className="ml-2 rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Take Me To All Movies
                        </button>
                    </div>

                    {/* list of result movies */}
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
                        {movieSearchedinList.map((item) => (
                            <div
                                className="relative h-[400px] w-[300px] rounded-md"
                                key={item.id}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left">
                                    <h1 className="text-lg font-semibold text-white">
                                        {item.title}
                                    </h1>
                                    <p className="mt-2 text-sm text-gray-300">{item.overview}</p>
                                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                        View More Info &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
                        {movies.map((item) => (
                            // item.filter((item.title == searchedValue)=>{
                            <div
                                className="relative h-[400px] w-[300px] rounded-md"
                                key={item.id}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left">
                                    <h1 className="text-lg font-semibold text-white">
                                        {item.title}
                                    </h1>
                                    <p className="mt-2 text-sm text-gray-300">{item.overview}</p>
                                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                        View More Info &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}
