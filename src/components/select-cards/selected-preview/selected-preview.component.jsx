import React from 'react'
import { useContext } from 'react'
import { preferencesContext } from '../../../contexts/preferences.context'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './selected-preview.styles.css'

const SelectedPreview = () => {
    const navigate = useNavigate();
    const { preferences } = useContext(preferencesContext)
    return (
        <div className="">
            <div className="header">
                <h2 className=''>Interview</h2>
            </div>
            <div className='preview'>
                {Object.keys(preferences).map((key, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {key}: {preferences[key]}
                            </p>

                            <hr />
                        </div>
                    );
                })}
            </div>
            <div className="outer-div">
                <div className="begin-button">
                    <Button onClick={() => {
                        navigate('/interview')
                    }}>Begin</Button>
                </div>
            </div>
        </div>
    )
}

export default SelectedPreview