import { useState } from "react";
import { Context } from "./Context";

export default function ContextProvider({ children }) {

    const [searchedValue, setSearchedValue] = useState('');
    const [searchBtnText, setSearchBtnText] = useState('Search')

    return (
        <Context.Provider value={{ searchedValue, setSearchedValue, searchBtnText, setSearchBtnText }}>
            {children}
            {/* or component I want to use here */}
        </Context.Provider>
    )
}