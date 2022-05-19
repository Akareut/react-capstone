import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

const SignUp = () =>{
    return (
 
    <div className="content">
        <div className="row row2">
            <div className="product-col4">
                <img src={"./images/log.svg"} alt ="SignUp"/>
            </div>
            <div className="sign-col">
                <div className="form-box">
                    <h2>Register</h2>
                    <div id="reg-error"></div>
                    <form id="signUp">
                        <input type="text" id="username" placeholder="Enter username"/>
                        <span id="error-user"></span>
                        <input type="email" id="email" placeholder="Enter email address"/>
                        <span id="error-email"></span>
                        <input type="password" id="password" placeholder="Enter password"/>
                        <span id="error-password"></span>
                        <button type="submit" className="btn">SIGN UP</button>
                        <p>Already have an account ? <Link to = "sign-in">Login here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  

    )
}

export default SignUp