import React from 'react'
import { useContext } from 'react'
import { preferencesContext } from '../../../contexts/preferences.context'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './selected-preview.styles.css'
import { questionsContext } from '../../../contexts/questions.context'

const SelectedPreview = () => {
    const navigate = useNavigate();
    const { preferences } = useContext(preferencesContext)
    const { getSelectedTopics } = useContext(questionsContext)


    const startInterview = async () => {
        const res = await getSelectedTopics(preferences);
        if (res) {
            navigate('/interview')
        } else {
            console.log("failed at the getQuestions")
        }
    }
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
                        startInterview()
                    }}>Begin</Button>
                </div>
            </div>
        </div>
    )
}

export default SelectedPreview