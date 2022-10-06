import { doc, getDoc } from "firebase/firestore";
import { useState, createContext, useEffect, useContext } from 'react'
import { db } from '../utils/firebase.utils'

export const questionsContext = createContext({})

export const QuestionsProvider = ({ children }) => {
    const [allTopics, setAllTopics] = useState([{}])
    const [review, setReview] = useState([{}])

    const addToReview = (questionToAdd) => {
        setReview(curr => [...curr, questionToAdd])
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
        allTopics, addToReview, getSelectedTopics
    }

    return (
        <questionsContext.Provider value={value}>{children}</questionsContext.Provider>
    )


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
