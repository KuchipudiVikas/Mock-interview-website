import { useState, createContext, useEffect } from 'react'
import { db } from '../utils/firebase.utils'
import { collection, getDocs } from 'firebase/firestore'
import Parser from 'html-react-parser'


export const questionsContext = createContext({})

export const QuestionsProvider = ({ children }) => {
    const questionsCollectionsRef = collection(db, "questions")
    const selectedTopics = [];
    const [allTopics, setAllTopics] = useState([{}])
    const [review, setReview] = useState([{}])

    const addToReview = (questionToAdd) => {
        console.log(review)
        setReview(curr => [...curr, questionToAdd])
    }


    useEffect(() => {
        let count = 0
        const getQuestions = async () => {
            const interviewQuestions = [];

            const data = await getDocs(questionsCollectionsRef)
            const a = data.docs
            a.forEach(element => {
                const id = element.id;
                selectedTopics.push({ ...element.data(), id })
            });

            setAllTopics(selectedTopics)

        }
        // getQuestions()

        const tester = async () => {
            await getQuestions()

        }

        tester()



    }, []);

    const value = {
        allTopics, addToReview
    }

    return (
        <questionsContext.Provider value={value}>{children}</questionsContext.Provider>
    )


}