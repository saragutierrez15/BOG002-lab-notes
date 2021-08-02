import React, { useState } from 'react'
import 'firebase/firestore'
import firebaseApp from 'firebase/app';
import './NotesForm.css'

const NotesForm = () => {

    const [valuesInput, setValuesInput] = useState({ Title: '', Text: '' })    
    const firebase = firebaseApp;
    const auth = firebase.auth();

    const inputChange = (e) => {
        const { name, value } = e.target
        setValuesInput({ ...valuesInput, [name]: value })

    }
    const handleSubmit = (e) => {
        const date = new Date();
        const userID = auth.currentUser.uid;
        e.preventDefault();
        firebase.firestore().collection('Notes').add({ valuesInput, date, userID})
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                
            })
    }


    return (
        <>
            <div className="notesContainer">
                <form onSubmit={handleSubmit}>
                    <input
                        className="titleInput"
                        type="text"
                        placeholder="Title"
                        name="Title"
                        onChange={inputChange}
                    ></input>
                    <textarea
                        className="textInput"
                        type="text"
                        placeholder="¿Que estas pensando?"
                        name="Text"
                        onChange={inputChange}
                    ></textarea>
                    <button className="buttonD">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default NotesForm;