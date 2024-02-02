import { useState } from "react";
import { Context } from "./Context";

export default function ContextProvider({ children }) {

    const [searchedValue, setSearchedValue] = useState('');
    const [searchBtnText, setSearchBtnText] = useState('Search');
    const [movies, setMovies] = useState([]);

    return (
        <Context.Provider value={{ searchedValue, setSearchedValue, searchBtnText, setSearchBtnText, movies, setMovies }}>
            {children}
            {/* or component I want to use here */}
        </Context.Provider>
    )
}