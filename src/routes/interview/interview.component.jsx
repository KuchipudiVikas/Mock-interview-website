import React from 'react'
import { useState, useEffect } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../utils/firebase.utils'
import { collection, getDocs } from 'firebase/firestore'
import { python } from '../../utils/questions'
import Parser from 'html-react-parser'
import { Collapse, Container, Button, Card, Row, Col, Spinner } from 'react-bootstrap';





const Interview = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    let [finalInterviewQuestions, setFinalInterviewQuestions] = useState([{ question: "test", answer: "test" }])
    const questionsCollectionsRef = collection(db, "questions")
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    let count = 0

    useEffect(() => {



        const getQuestions = async () => {
            const selectedTopics = [];
            const interviewQuestions = [];

            const data = await getDocs(questionsCollectionsRef)
            // setQuestions(data.docs.map((doc) => ({ ...doc.data, id: doc.id })));
            const a = data.docs
            a.forEach(element => {
                selectedTopics.push({ ...element.data() })
            });

            count = Math.floor(20 / selectedTopics.length)
            selectedTopics.forEach(topic => {
                const { questions } = topic;
                for (let i = 0; i < count; i++) {
                    const index = Math.floor(Math.random() * questions.length)

                    const curr = questions[index];
                    const question = Parser(curr.question)
                    const answer = Parser(curr.answer)
                    interviewQuestions.push({ question: question, answer: answer })
                }
            })


            setFinalInterviewQuestions(interviewQuestions)
            setLoading(false)
        }

        const tester = async () => {
            getQuestions()

        }

        tester()



    }, []);





    return (
        <div className="border d-flex align-items-center justify-content-center">

            {
                loading ? (

                    <div className="border d-flex align-items-center justify-content-center">
                        <Spinner animation="border" />

                    </div>


                ) : (<Container className='mt-15'>

                    <Row>

                        <Col xs={9}><Card>


                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
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
                                    onClick={() => {
                                        setCurrentIndex(index => index + 1)
                                        setOpen(false)
                                    }}
                                    aria-controls="example-collapse-text"
                                >
                                    Next question
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        {finalInterviewQuestions[currentIndex].answer}
                                    </div>
                                </Collapse>
                            </Card.Body>

                        </Card >
                        </Col >

                        <Col >user video</Col>
                    </Row >

                </Container >)

            }




        </div >
    )
}

export default Interview


   // const testing = async () => {
        //     await setDoc(doc(db, "questions", "java-intermediate"), python)
        //     console.log('uploaded')
        // }
        // // testing()

