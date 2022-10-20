import { Collapse, Button, Card, Col } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { questionsContext } from '../../contexts/questions.context';
import './question-card.styles.css'

const QuestionCard = ({ finalInterviewQuestions }) => {

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const { addToReview } = useContext(questionsContext)
    const [success, setSuccess] = useState(false);
    const nextQuestion = () => {
        if (currentIndex + 2 > finalInterviewQuestions.length) {
            alert("done")
        } else {
            setCurrentIndex(count => count + 1)
            setOpen(false)
            setSuccess(false)
        }
    }
    const prevQuestion = () => {
        if (currentIndex != 0) {
            setCurrentIndex(count => count - 1)
            setOpen(false)
        }
    }



    return (
        <Col xs={9}><Card className="mt-5">


            <Card.Header>{finalInterviewQuestions[currentIndex].id}</Card.Header>
            <Card.Body>
                <Card.Title>{currentIndex + 1}</Card.Title>
                <Card.Text>
                    {finalInterviewQuestions[currentIndex].question}
                </Card.Text>
                <span className='question-options'>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        show answer
                    </Button>

                    <span className=''>
                        <span className='options'>
                            <Button
                                onClick={prevQuestion}
                                aria-controls="example-collapse-text"
                            >
                                prev
                            </Button>
                        </span>
                        <span className='options'>
                            <Button
                                onClick={nextQuestion}
                                aria-controls="example-collapse-text">
                                Next
                            </Button>
                        </span>
                        <span className="options">
                            <Button variant={success ? 'success' : 'primary'}
                                onClick={() => {
                                    addToReview(finalInterviewQuestions[currentIndex]);
                                    // nextQuestion()
                                    setSuccess(true)
                                }}
                            >

                                Mark for review
                            </Button>
                        </span>
                    </span>
                </span>
                <Collapse in={open} className="mt-3">
                    <div id="example-collapse-text">
                        {finalInterviewQuestions[currentIndex].answer}
                    </div>
                </Collapse>
            </Card.Body>

        </Card >
        </Col >


    )
}

export default QuestionCard
