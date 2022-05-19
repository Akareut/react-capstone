import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    const [isMobile,setIsMobile] = useState(false)
    return (
        <div className="container">  
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <h4>Iconic<span>Online store...</span></h4>
                </Link>
            </div>
            <nav>
                <ul className={isMobile ? "nav-links-mobile":"nav-links"}
                    onClick = {()=>setIsMobile(false)}>
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
                    <Link to="/cart"><i className="fas fa-shopping-cart cart"> <span id="itemsNum"></span></i></Link>

                </ul>
            </nav>
            <button className="mobile-icon"
                    onClick={()=>setIsMobile(!isMobile)}
                >
                    {isMobile ? <i className="fas fa-times menu"></i>:<i className="fas fa-bars menu"></i>}
                </button>
        </div>
    </div>
    )
}

export default NavBar
