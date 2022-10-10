import { useState, useEffect, useContext } from 'react'
import Parser from 'html-react-parser'
import { Collapse, Container, Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import { questionsContext } from '../../contexts/questions.context';
import { useRecordWebcam } from 'react-record-webcam'
import './interview.styles.css'


const Interview = () => {

    const [finalInterviewQuestions, setFinalInterviewQuestions] = useState([{ id: "test", question: "question", answer: "answer" }])
    let count = 0;
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const { allTopics, addToReview } = useContext(questionsContext)
    const recordWebcam = useRecordWebcam();

    useEffect(() => {
        const interviewQuestions = []
        count = Math.floor(20 / allTopics.length)
        allTopics.forEach(topic => {
            const { questions } = topic;
            for (let i = 0; i < count; i++) {
                const index = Math.floor(Math.random() * questions.length)
                const curr = questions[index];
                const question = Parser(curr.question)
                const answer = Parser(curr.answer)
                interviewQuestions.push({ id: topic.id, question: question, answer: answer })
            }
        })
        setFinalInterviewQuestions(interviewQuestions)
        recordWebcam.open()
    }, [])

    const toggleVideo = async () => {
        if (recordWebcam.status == 'RECORDING') {
            await recordWebcam.stop()
            recordWebcam.download()

        }
        if (recordWebcam.status == 'OPEN') {
            recordWebcam.start()
        }
    }

    const nextQuestion = () => {
        if (currentIndex + 2 > finalInterviewQuestions.length) {
            alert("done")
        } else {
            setCurrentIndex(count => count + 1)
            setOpen(false)
        }
    }


    return (
        <div className="border d-flex align-items-center justify-content-center">
            <Container className='mt-15'>

                <Row>

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
                                &#10509;
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

                    <Col >
                        {recordWebcam.status}
                        <video className="uservideo" ref={recordWebcam.webcamRef} autoPlay muted />
                        <Button onClick={toggleVideo} >
                            {recordWebcam.status == 'RECORDING' ? 'STOP' : 'START'}
                        </Button>



                    </Col>
                </Row >

            </Container >
        </div >
    )
}

export default Interview


   // const testing = async () => {
        //     await setDoc(doc(db, "questions", "java-intermediate"), python)
        //     console.log('uploaded')
        // }
        // // testing()

