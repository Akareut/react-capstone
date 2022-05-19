import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

const SignIn = () =>{
    return (
        <div className="container">
        <div className="content">
        <div className="row mtop">   
            <div className="product-col4">
                <img src={"./images/log.svg"} alt="sign-in"/>
            </div>
            <div className="sign-col">
                <div className="form-box">
                    <h2>login</h2>
                    <div id="login-error"></div>
                    <form id="signIn">
                        <input type="email" id="email-sign" placeholder="Enter email address"/>
                        <span id="errorEmail"></span>
                        <input type="password" id="password-sign" placeholder="Enter password"/>
                        <span id="errorPassword"></span>
                        <button type="submit" className="btn">LOGIN</button>
                        <p>Don't have an account ? <Link to="/sign-up">Register here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</div>
        
)
}

export default SignIn