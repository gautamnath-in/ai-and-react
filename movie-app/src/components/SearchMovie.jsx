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
        <div className="flex w-full items-center space-x-2 ">
            <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
    )
}
