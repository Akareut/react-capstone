import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {

    function toggleMenu(){
        let menuItems =document.querySelector("#menuItems")
        menuItems.style.maxHeight = "0px"

        if(menuItems.style.maxHeight === "0px"){
            menuItems.style.maxHeight = "200px"
        }else{
            menuItems.style.maxHeight = "0px"
            }
        }

    return (
        <div className="container">
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <h4>Iconic<span>Online store...</span></h4>
                </Link>
            </div>
            <nav>
                <ul id="menuItems">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li className="dropdown">
                        <Link to=""> Account
                            <i className="fa fa-chevron-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <Link to="/sign-in" id="log">Login</Link>
                            <Link to="/sign-up" id="reg">Register</Link>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Link to="/cart"><i className="fas fa-shopping-cart cart"> <span id="itemsNum"></span></i></Link>
            <i className="fas fa-bars menu" onClick={toggleMenu}></i>
        </div>
    </div>
    )
}

export default NavBar
