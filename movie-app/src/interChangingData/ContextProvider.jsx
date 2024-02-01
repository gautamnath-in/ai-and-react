import { useState } from "react";
import { Context } from "./Context";

export default function ContextProvider({ children }) {

    const [searchedValue, setSearchedValue] = useState('')

    return (
        <Context.Provider value={{ searchedValue, setSearchedValue }}>
            {children}
            {/* or component I want to use here */}
        </Context.Provider>
    )
}