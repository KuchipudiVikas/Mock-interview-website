import { Collapse, Container, Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { questionsContext } from '../../contexts/questions.context';
import { GrNext } from 'react-icons/gr'

const QuestionCard = ({ finalInterviewQuestions }) => {

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const { allTopics, addToReview } = useContext(questionsContext)
    const nextQuestion = () => {
        if (currentIndex + 2 > finalInterviewQuestions.length) {
            alert("done")
        } else {
            setCurrentIndex(count => count + 1)
            setOpen(false)
        }
    }


    return (
        <Col xs={9}><Card>


            <Card.Header>{finalInterviewQuestions[currentIndex].id}</Card.Header>
            <Card.Body>
                <Card.Title>{currentIndex + 1}</Card.Title>
                <Card.Text>
                    {finalInterviewQuestions[currentIndex].question}
                </Card.Text>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    show answer
                </Button>
                <Button
                    onClick={nextQuestion}
                    aria-controls="example-collapse-text"
                >
                    Next question
                </Button>
                <span onClick={nextQuestion}>
                    <GrNext />
                </span>
                <Button
                    variant="warning"
                    onClick={() => {
                        addToReview(finalInterviewQuestions[currentIndex]);
                        nextQuestion()
                    }}
                    aria-controls="example-collapse-text"
                >
                    Mark For Review
                </Button>
                <Collapse in={open}>
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
