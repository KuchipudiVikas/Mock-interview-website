import React from 'react'
import { useState, useEffect } from 'react'

import { db } from '../../utils/firebase.utils'
import { collection, getDocs } from 'firebase/firestore'
import { python } from '../../utils/questions'
const Interview = () => {
    const [questions, setQuestions] = useState({});
    const questionsCollectionsRef = collection(db, "questions")
    const [inter, setInter] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const data = await getDocs(questionsCollectionsRef)
            setQuestions(data.docs.map((doc) => ({ ...doc.data, id: doc.id })));
            const a = data.docs
            a.forEach(element => {
                console.log(element.data(), element.id)
            });
        }

        let k = []
        const test = python[0].questions;
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 18);
            k.push(test[index])
        }
        setInter(k)
    }, [])

    return (
        <div>{
            inter.map(card => (
                <div>
                    {card.question}, {card.answer}
                </div>
            )
            )

        }</div>
    )
}

export default Interview