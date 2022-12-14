import React from 'react'
import { useState } from 'react'
import { db } from '../../utils/firebase.utils'
import { setDoc, doc } from 'firebase/firestore'
import { python } from './questions'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()
    const [res, setRes] = useState('')
    const [name, setName] = useState('')
    const upload = async () => {
        setRes('uploading...')
        await setDoc(doc(db, "questions", name), python)
        setRes('Done')
        console.log('Done')
    }

    const handleChange = event => {
        setName(event.target.value)
    }
    return (
        <center>
            <div>
                <input type="text" onChange={handleChange} /><br />
                <button onClick={upload}>upload</button>
                <h1>{res}</h1>
            </div>

            <div>
                <button onClick={() => {
                    navigate('/preferences')
                }} >
                    preferences
                </button>
            </div>
        </center>
    )
}

export default Admin