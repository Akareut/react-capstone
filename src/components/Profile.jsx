import React,{useContext} from 'react'
import '../App.css'
import UserContext from '../UserContext'
import ProfileCard from './ProfileCard'

const Profile = () =>{
    const { isLoggedIn }  = useContext(UserContext)
    const users = JSON.parse(localStorage.getItem("users"))

    let user = users ? users.filter(u => u.email === isLoggedIn.email) : null
    
    console.log(user)
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
                                {
                                    user.map((profile,index)=>{
                                        return(
                                            <ProfileCard key={index} profile={profile}/>
                                        )
                                    })
                                }
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