import React, { useState } from 'react'
import amazonLogo from "../../assets/img/amazon-logo.png";
import './styles.css'
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

function LogIn() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <img src={amazonLogo} className="amazon_logo" alt="amazon logo" />
            <div className="login__container">
                <h1>Sign-In</h1>
                <form onSubmit={login} >
                    <h5>Email</h5>
                    <input type="text"  value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's CLONE Conditions of 
                    Use and Privacy Notice. 
                </p>
            </div>
            <div className="login__container__below">
                <h5>New to Amazon Clone ?</h5>
                <button type="button" onClick={register} >
                    create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default LogIn
