import React, { useState } from 'react';
import './LoginSignup.css';
import AuthService from '../../services/AuthService';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        AuthService.login(email, password).then(response => {
            // Handle successful login
            console.log(response);
        }).catch(error => {
            // Handle login errors
            console.error(error);
        });
    };

    const handleSignup = () => {
        AuthService.signup(name, email, password).then(response => {
            // Handle successful signup
            console.log(response);
        }).catch(error => {
            // Handle signup errors
            console.error(error);
        });
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" &&
                    <div className="input">
                        <img alt=""></img>
                        <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                }
                <div className="input">
                    <img alt=""></img>
                    <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img alt=""></img>
                    <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Login" && 
                <div className="forgot-password">Lost password? <span>Click here!</span></div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignup}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
