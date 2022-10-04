import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { preferencesContext } from '../../contexts/preferences.context'
import options from './options'
const SelectCard = () => {
    const { preferences, setPreferences } = useContext(preferencesContext);
    console.log("from context", preferences)
    const handleChange = (e) => {
        const copyObj = { ...preferences };
        const { name, value } = e.target;
        if (value == 'remove') {
            const isExist = name in preferences;
            if (isExist) {
                delete copyObj[name];
                setPreferences({ ...copyObj })
            }
        }
        else {
            setPreferences(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    return (
        <div>
            {
                options.map((option) => {
                    return (
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">{option}</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" onChange={handleChange} name={option}>
                                <option selected value='remove'>Choose...</option>
                                <option value="beginner" name="java" onChange={handleChange}>Beginner</option>
                                <option value="intermediate" name="java">Intermediate</option>
                                <option value="advanced" name="java">Advanced</option>
                            </select>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default SelectCard