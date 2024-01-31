import React, { useState, useEffect } from 'react';

export default function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=14d9b8074098217511e35ec624c745ec')
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                console.log(data.results)
            })
    }, []);

    return (
        <>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
                {movies.map(item => (
                    <div className="relative h-[400px] w-[300px] rounded-md">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt="AirMax Pro"
                            className="z-0 h-full w-full rounded-md object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-left">
                            <h1 className="text-lg font-semibold text-white">{item.title}</h1>
                            <p className="mt-2 text-sm text-gray-300">
                                {item.overview}
                            </p>
                            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                View More Info &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}