import SelectedPreview from '../../components/select-cards/selected-preview/selected-preview.component'
import SelectCard from '../../components/select-cards/select-cards.component'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Preferences = () => {
    const navigate = useNavigate()
    return (
        <div>

            <SelectCard />
            <SelectedPreview />
            <button onClick={() => {
                navigate('/interview')
            }}>Start</button>

        </div>
    )
}

export default Preferences