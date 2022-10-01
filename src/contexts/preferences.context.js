import { createContext } from "react";
import { useState } from "react"
export const preferencesContext = createContext({});


export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState({});

    const value = { preferences, setPreferences };
    return (
        <preferencesContext.Provider value={value}>{children}</preferencesContext.Provider>
    )
}