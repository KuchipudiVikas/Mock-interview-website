import { useState, useContext } from "react"
import { questionsContext } from "../../contexts/questions.context"
import { OPTIONS, useRecordWebcam } from 'react-record-webcam'
import { useEffect } from "react";
import './result.styles.css'
import { Link } from "react-router-dom";

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
            <h3>Interview succesfully completed</h3>
            <Link to="/">Home</Link>
        </div >
    )
}

export default Result