import { doc, getDoc } from "firebase/firestore";
import { useState, createContext, useEffect, useContext } from 'react'
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

    const getSelectedTopics = async (preferences) => {
        console.log("get selected topics called", preferences)
        const GinterviewQuestions = [];

        for (let key in preferences) {
            let topic = key.toLowerCase() + "-" + preferences[key]
            const docRef = doc(db, "questions", topic);
            const docSnap = await getDoc(docRef);



            if (docSnap.exists()) {
                const data = docSnap.data()
                console.log("Document data:", data);
                GinterviewQuestions.push(data)
                console.log(GinterviewQuestions)

            } else {
                console.log("No such document!");
            }
        }

        setAllTopics(GinterviewQuestions)
        console.log("done")
        return "done"
    }

    // useEffect(() => {
    //     let count = 0
    //     const getQuestions = async () => {
    //         const interviewQuestions = [];

    //         const data = await getDocs(questionsCollectionsRef)
    //         const a = data.docs
    //         a.forEach(element => {
    //             const id = element.id;
    //             selectedTopics.push({ ...element.data(), id })
    //             console.log(selectedTopics)
    //         });

    //         // setAllTopics(selectedTopics)


    //     }
    //     // getQuestions()

    //     const tester = async () => {
    //         await getQuestions()

    //     }

    //     tester()



    // }, []);

    const value = {
        allTopics, addToReview, getSelectedTopics
    }

    return (
        <questionsContext.Provider value={value}>{children}</questionsContext.Provider>
    )


}