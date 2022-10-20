import { createContext } from "react";
import { useState } from "react"

export const preferencesContext = createContext({});


export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState({});
    const removeItem = (key) => {
        let temp = { ...preferences };

        delete temp[key];
        setPreferences(temp)
    }

    const value = { preferences, setPreferences, removeItem };
    return (
        <preferencesContext.Provider value={value}>{children}</preferencesContext.Provider>
    )
}