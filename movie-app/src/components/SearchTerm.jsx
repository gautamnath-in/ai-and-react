import { useContext } from "react";
import { Context } from "../interChangingData/Context";

export default function SearchTerm() {

    const { searchedValue, setSearchedValue, setSearchBtnText } = useContext(Context);

    // resting search form 
    function resetSearch() {
        setSearchedValue('');
        setSearchBtnText('Search')
    }

    return (
        <>
            {searchedValue && searchedValue.length ?
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
                : ''
            }
        </>
    )
}