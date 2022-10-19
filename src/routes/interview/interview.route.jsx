import { useState, useEffect, useContext } from 'react'
import Parser from 'html-react-parser'
import { Container, Row, } from 'react-bootstrap';
import { questionsContext } from '../../contexts/questions.context';
import './interview.styles.css'
import QuestionCard from '../../components/question-card/question-card.component';
import UserVideo from '../../components/user-video/user-video.component';

const Interview = () => {

    const [finalInterviewQuestions, setFinalInterviewQuestions] = useState([{ id: "test", question: "question", answer: "answer" }])
    let count = 0;
    const { allTopics, } = useContext(questionsContext)


    useEffect(() => {
        const interviewQuestions = []
        count = Math.floor(20 / allTopics.length)
        allTopics.forEach(topic => {
            const { questions } = topic;
            for (let i = 0; i < count; i++) {
                let index = Math.floor(Math.random() * questions.length)
                let curr = questions[index];
                let question = Parser(curr.question)
                let answer = Parser(curr.answer)
                interviewQuestions.push({ id: topic.id, question: question, answer: answer })
            }
        })
        setFinalInterviewQuestions(interviewQuestions)
    }, [])





    return (
        <div className="border d-flex align-items-center justify-content-center">
            <Container className='mt-15'>
                <Row>
                    <QuestionCard finalInterviewQuestions={finalInterviewQuestions} />
                    <UserVideo />
                </Row >
            </Container >
        </div >
    )
}

export default Interview
