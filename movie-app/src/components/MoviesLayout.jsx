const MoviesLayout = ({ movie }) => {
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                    {movie.title}
                </h1>
                <p className="mt-2 text-sm text-gray-300">{movie.overview}</p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View More Info &rarr;
                </button>
            </div>
        </div>
    )
}

export default MoviesLayout;