import { useContext, useState } from "react"
import { Context } from "../interChangingData/Context";

export default function NowPlaying() {

    const [categories, setCategories] = useState(['popular', 'now playing', 'tv']);
    // const [isActive, setIsActive] = useState(true);
    const [isActive, setIsActive] = useState(categories[1]); //setting 1st ele active

    const { searchedValue, setCategory, onDemandMovies } = useContext(Context);

    // console.log(onDemandMovies)
    const categoryOnSelect = (e) => {
        setIsActive(e.target.id);
        setCategory(e.target.id); //sending request to API for this category movies
        let movieType = e.target.id.split(' ').join('_'); //appending undersore on space for api call
        setCategory(movieType); //sending request to API for this category movies
    }

    // filtreing movie/shows list based on title
    let movieSearchedinList = onDemandMovies.filter(
        (movie) => { let movieName = movie.name || movie.title; return movieName.toLowerCase() == searchedValue.toLowerCase() || movieName.toLowerCase().match(`${searchedValue.toLowerCase()}`) }
    );

    return (
        <div className="bg-violet-100 pt-5 pb-10">
            <div className=" md:w-11/12 mx-auto">
                <div className="drop-shadow-lg ">
                    <p className="text-gray-600 text-sm font-bold">See what's</p>
                    <h2 className="text-4xl text-primary font-bold mb-3">Trending</h2>
                </div>
                <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
                    {categories.map(category => (
                        <li key={category}>
                            <div
                                // onClick={() => setIsActive(category)}
                                onClick={categoryOnSelect}
                                className={` ${isActive == category ? "bg-white rounded-full shadow text-indigo-900" : ''} flex justify-center py-4 capitalize`}
                                id={category}
                            >{category}</div>
                        </li>
                    ))}
                </ul>
                {movieSearchedinList.length ?
                    <div className="container mx-auto mt-5">
                        <div className=" flex flex-row gap-4 flex-wrap">
                            {/* here I missed to use return for curly brcaes --> struglled for an hour or less */}
                            {movieSearchedinList.map((movie, index) => {
                                // if (index >= 10) {
                                //this block is to limit size
                                //     return;
                                // }
                                return (
                                    <div className="relative  bg-slate-500 rounded-2xl" key={movie.id}>
                                        <div className="max-h-32">
                                            <img className="object-cover w-max max-h-32 rounded-xl"
                                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                                        </div>
                                        <div className="capitalize text-4xl font-extrabold rounded-lb-3xl  absolute inset-x-0 bottom-0 max-h-31">
                                            <span className="box-decoration-clone bg-gradient-to-r from-indigo-500 rounded-l-lg text-white font-normal">
                                                <span className="text-sm inline-block align-middle pr-5 pl-2">
                                                    Rating: {movie.vote_average}
                                                </span>
                                            </span>
                                        </div>
                                    </div>)
                            })
                            }
                        </div>
                    </div>
                    : <div className="grid h-52 place-content-center bg-white px-4">
                        <h1 className="uppercase tracking-widest text-gray-500">Oops ! | Not Found</h1>
                    </div>}
            </div>
        </div>
    )
}