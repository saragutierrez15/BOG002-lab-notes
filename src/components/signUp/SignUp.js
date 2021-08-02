import React, { useState } from 'react';
import './SignUp.css';
import 'firebase/auth';
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from 'reactfire';
import firebaseApp from 'firebase/app';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const firebase = useFirebaseApp();
    const history = useHistory();


    const signUpWithEmailPass = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => history.push('/Notes'))
            .catch((err) => console.log(err))
    }
    const signUpGoogle = () => {
        const provider = new firebaseApp.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(() => history.push("/Notes"))
            .catch(() =>
                setError('Error al crear la cuenta, intente nuevamente'))
    }


    return (
        <div className="signUpContainer">
            <button onClick={signUpGoogle} className="buttonB">Registrate con Google</button>
            <form onSubmit={signUpWithEmailPass}>
                <h1>{error}</h1>
                <div className="signUpWithEmailPass">
                    <input
                        className="input"
                        type="email"
                        placeholder="Correo Electrónico"
                        onChange={(eve) => setEmail(eve.target.value)}>
                    </input>
                    <input className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={(eve) => setPassword(eve.target.value)}>
                    </input>
                    <button type="submit" className="button">Crear Cuenta</button>                  
                    
                </div>
            </form>
        </div>
    );
}

export default SignUp;