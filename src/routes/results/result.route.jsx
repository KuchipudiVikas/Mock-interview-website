import { useState, useContext } from "react"
import { questionsContext } from "../../contexts/questions.context"
import { OPTIONS, useRecordWebcam } from 'react-record-webcam'
import { useEffect } from "react";
import './result.styles.css'

const Result = () => {
    const { review } = useContext(questionsContext);
    const recordWebcam = useRecordWebcam();
    useEffect(() => {
        recordWebcam.stop()
    }, [])
    return (
        <div>
            {
                review.length ? (<h1 className="review-header">Marked for review</h1>) : ''
            }
            {
                review.map((item) => (
                    <div key={item} className="review-item">

                        <h4>{item.question}</h4>
                        <p>{item.answer}</p>

                    </div>
                ))
            }
        </div >
    )
}

export default Result