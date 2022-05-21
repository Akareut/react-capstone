import React,{useContext} from 'react'
import '../App.css'
import UserContext from '../UserContext'


const Profile = () =>{
    const { isLoggedIn }  = useContext(UserContext)

    if(!isLoggedIn){
        window.location.replace("/")
    }
    return (
        <>
        <div className="container">
            <div className="content">
                <div className="row mtop">   
                    <div className="product-col4">
                        <img src={"./images/log.svg"} alt="profile"/>
                    </div>
                    <div className="sign-col">
                        <div className="form-box">
                            <i className="fas fa-user icon-user"></i>
                            <h2 className="left-">Profile</h2>
                            <ul className="-span">
                                <li>
                                    <strong>Email:</strong>
                                    {isLoggedIn.email}
                                </li>
                                <li>
                                    <strong>Password:</strong>
                                    {isLoggedIn.password}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Profile