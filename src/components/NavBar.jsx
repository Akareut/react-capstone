import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h1>Nav bar</h1>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/sign-in">Sign in</Link>
            <Link to="/sign-up">Sign up</Link>
        </div>
    )
}

export default NavBar
