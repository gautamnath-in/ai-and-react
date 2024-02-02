import React, { useContext } from "react";
import { Context } from "../interChangingData/Context";
import MoviesLayout from "./MoviesLayout";
import ErrorPage from "./ErrorPage";

export default function MovieList() {

    // Fetch(); //Moved to App.js for detailed page

    const { searchedValue, movies } = useContext(Context);

    // filtreing movie list based on title
    let movieSearchedinList = movies.filter(
        (movie) => movie.title.toLowerCase() == searchedValue.toLowerCase() || movie.title.toLowerCase().match(`${searchedValue.toLowerCase()}`)
    );

    return (
        <>
            {
                movieSearchedinList.length ?
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
                        {movieSearchedinList.map((movie) => (
                            <MoviesLayout movie={movie} key={movie.id} />
                        ))}
                    </div>
                    : <ErrorPage />
            }
        </>
    );
}
