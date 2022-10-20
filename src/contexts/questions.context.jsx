import { doc, getDoc } from "firebase/firestore";
import { useState, createContext, useEffect, useContext } from 'react'
import { db } from '../utils/firebase.utils';

export const questionsContext = createContext({})

export const QuestionsProvider = ({ children }) => {
    const [allTopics, setAllTopics] = useState([{}])
    const [review, setReview] = useState([])

    const addToReview = (questionToAdd) => {
        if (review.indexOf(questionToAdd) == -1) {
            setReview(curr => [...curr, questionToAdd])
        }
    }

    const getSelectedTopics = async (preferences) => {
        const GinterviewQuestions = [];

        for (let key in preferences) {
            let topic = key.toLowerCase() + "-" + preferences[key]
            const docRef = doc(db, "questions", topic);
            const docSnap = await getDoc(docRef);



            if (docSnap.exists()) {
                const data = docSnap.data()
                GinterviewQuestions.push({ ...data, id: topic })

            } else {
                console.log("No such document!");
            }
        }

        setAllTopics(GinterviewQuestions)
        return "done"
    }


    const value = {
        allTopics, addToReview, getSelectedTopics, review
    }

    return (
        <questionsContext.Provider value={value}>{children}</questionsContext.Provider>
    )


}

