import React from 'react'
import { useContext } from 'react'
import { preferencesContext } from '../../../contexts/preferences.context'

const SelectedPreview = () => {
    const { preferences } = useContext(preferencesContext)
    return (
        <div>

            {/* 👇️ iterate object KEYS */}
            {Object.keys(preferences).map((key, index) => {
                return (
                    <div key={index}>
                        <h2>
                            {key}: {preferences[key]}
                        </h2>

                        <hr />
                    </div>
                );
            })}
        </div>
    )
}

export default SelectedPreview