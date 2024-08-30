import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import './LoginSignup.css';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("STUDENT");
    const [responseMessage, setResponseMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email && password) {
            AuthService.login(email, password)
                .then(response => {
                    console.log("Login successful:", response.data);
                    navigate('/home'); // Redirect to home page
                })
                .catch(error => {
                    console.error("Login error:", error.response || error.message || error);
                });
        } else {
            console.error("Please enter both email and password.");
        }
    };

    const handleSignup = () => {
        if (name && email && password) {
            AuthService.signup(name, email, password, role)
                .then(response => {
                    setResponseMessage("Signup successful.");
                })
                .catch(error => {
                    setResponseMessage("Signup error: " + (error.response?.data?.message || error.message));
                });
        } else {
            setResponseMessage("Please fill in all fields.");
        }
    };

    const handleResetPasswordClick = () => {
        navigate('/reset-password');
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" &&
                    <>
                        <div className="input">
                            <input 
                                type="text" 
                                placeholder='Name' 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                            />
                        </div>
                        <div className="input">
                            <select 
                                value={role} 
                                onChange={e => setRole(e.target.value)}
                            >
                                <option value="STUDENT">Student</option>
                                <option value="TEACHER">Teacher</option>
                            </select>
                        </div>
                    </>
                }
                <div className="input">
                    <input 
                        type="email" 
                        placeholder='Email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
            </div>
            {action === "Login" && 
                <div className="forgot-password">
                    Lost password? <span onClick={handleResetPasswordClick} style={{ cursor: 'pointer', color: '#007BFF' }}>Click here!</span>
                </div>
            }
            <div className="submit-container">
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => {
                        setAction("Sign Up");
                        handleSignup();
                    }}
                >
                    Sign Up
                </div>
                <div 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={() => {
                        setAction("Login");
                        handleLogin();
                    }}
                >
                    Login
                </div>
            </div>
            
            {responseMessage && <p id="responseMessage">{responseMessage}</p>}
        </div>
    );
};

export default LoginSignup;
