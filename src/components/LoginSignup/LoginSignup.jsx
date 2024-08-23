import React, { useState } from 'react'
import './LoginSignup.css';
//import a from '../Assets/a.png';
//import b from '../Assets/b.png';
const LoginSignup = () => {
    const [action,setAction] = useState("Login");
    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">{action=="Login"?<div></div>:<div className="input">
                    <img  alt=""></img>
                    <input type="text" placeholder='name'></input>
                </div>}
                
                <div className="input">
                    <img  alt=""></img>
                    <input type="email" placeholder='email'></input>
                </div>
                <div className="input">
                    <img alt=""></img>
                    <input type="password" placeholder='password'></input>
                </div>
            </div>
            {action=="Sign Up"?<div></div>:<div className="forgot-password">Lost password? <span>Click here!</span>
                </div>}
            
            <div className="submit-container">
                <div className={action=="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action=="Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
            
             </div>



            )

}
export default LoginSignup;