import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import './index.css'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/signUp/SignUp'
import Notes from './components/notes/Notes'
import NotesForm from './components/notesForm/NotesForm'



export function App() {
    return (
        <Router>
            <Switch>
                <Route path="/SignUp">
                    <Navbar />
                    <SignUp />
                </Route>
                <Route path="/Notes">
                    <Navbar />
                    <NotesForm />
                    <Notes />
                </Route>
                <Route path="/">
                    <Navbar />
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}