import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import '../login/Login.css'
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import firebaseApp from 'firebase/app';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [error, setError] = useState('')
    const history = useHistory();
    const firebase = useFirebaseApp();


    const enter = (e) => {
        e.preventDefault()        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => history.push('/Notes'))
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    setErrorMail('Correo invalido')
                    setTimeout(() => {
                        setErrorMail('')
                    }, 3000)
                }
                if (err.code === 'auth/wrong-password') {
                    setErrorPass('Contraseña Incorrecta')
                    setTimeout(() => {
                        setErrorPass('')
                    }, 3000)
                }
            });

    }

    const signUpGoogle = () => {
        const provider = new firebaseApp.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(() => history.push("/Notes"))
            .catch(() =>
                setError('No se puede iniciar sesión con Google, intente nuevamente'))
    }


    return (
        <div className="loginContainer">
            <form onSubmit={enter}>
                <div className="loginStart">
                    <input
                        className="input"
                        type="email"
                        placeholder="Correo Electrónico"
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    {errorMail === '' ? null : <p className="errorP">{errorMail}</p>}
                    <input
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    {errorPass === '' ? null : <p className="errorP">{errorPass}</p>}
                    <button className="button" type="submit">Iniciar Sesión</button>
                    <button onClick={signUpGoogle} className="button">Iniciar con Google</button>
                    <p>{error}</p>
                </div>
            </form>
            <div className="loginRegister">
                <Link to="/SignUp"><button className="button">Crear Cuenta</button></Link>
            </div>
        </div>);
}

export default Login;