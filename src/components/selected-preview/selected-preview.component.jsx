import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { questionsContext } from '../../contexts/questions.context'
import { preferencesContext } from '../../contexts/preferences.context'
import './selected-preview.styles.css'
import { useState } from 'react'

const SelectedPreview = () => {
    const navigate = useNavigate();
    const { preferences } = useContext(preferencesContext)
    const { getSelectedTopics } = useContext(questionsContext)
    const [loading, setLoading] = useState(false)


    const startInterview = async () => {
        if (Object.keys(preferences).length) {
            setLoading(true)
            const res = await getSelectedTopics(preferences);
            if (res) {
                navigate('/interview')
            } else {
                console.log("failed at the getQuestions")
            }
        } else {
            alert('select atleast one topic to start interview')
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
                            <span>
                                {key}: {preferences[key]}
                            </span>
                            {/* <span onClick={removeItem(key)}>x</span> */}

                            <hr />
                        </div>
                    );
                })}
            </div>
            <div className="outer-div">
                <div className="begin-button">
                    <Button
                        variant="primary"
                        disabled={loading}
                        onClick={startInterview}
                    >
                        {loading ? 'Loading…' : 'Begin'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SelectedPreview