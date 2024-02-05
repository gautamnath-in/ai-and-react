import { useContext, useState } from 'react'
import { Context } from '../interChangingData/Context';

export default function SearchMovie() {

    const [searchText, setSearchText] = useState('');
    // const [searchBtnText, setSearchBtnText] = useState('Search');Moving to Provider for resting movie Search

    const { setSearchedValue, searchBtnText, setSearchBtnText } = useContext(Context)

    const handleSubmit = (e) => {
        setSearchedValue(searchText);
        setSearchBtnText(searchText !== '' ? 'Search Another' : 'Search');
        setSearchText('');
    }

    return (
        <section className="relative z-10 bg-emerald-400 pt-5 pb-10">
            <div className="container mx-auto">
                <div className="-mx-4 flex">
                    <div className="w-full px-4 text-center">
                        <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                            Welcome.
                        </h2>
                        <small>This product uses the TMDB API but is not endorsed or certified by TMDB.</small>
                        <h3 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                            Time to discover good movies. Explore now.
                        </h3>
                        <div className="flex items-center space-x-2 w-9/12 mx-auto">
                            <input
                                className="rounded-full bg-white flex h-10 w-full border border-teal-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Search Movie"
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                            ></input>

                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="whitespace-nowrap rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                {searchBtnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                <div className="flex h-full w-1/3">
                    <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
                <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
        </section>
    )
}
