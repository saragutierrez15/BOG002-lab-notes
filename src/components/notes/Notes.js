import React from 'react'
import '../notes/Notes.css'
import 'firebase/auth';
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from 'reactfire';

const Notes = () => {

    const firebase = useFirebaseApp();
    const history = useHistory();

    const LogOut = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('sesión terminada')
                history.push('/login')
            })
    }
    return (
        <>
            <button onClick={LogOut} className="buttonC">Cerrar Sesión</button>
            <p>esta sera una nota</p>
            <p>esta sera otra nota</p>

        </>
    )
}
export default Notes;