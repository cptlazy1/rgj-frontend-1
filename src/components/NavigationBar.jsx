import React from 'react'
import {useNavigate, Link} from "react-router-dom"
import logo from '../assets/RGJ logo.png'
import './NavigationBar.css'

function NavigationBar() {



    return (
        <>
            <nav>
                <img src={logo} alt="logo"/>


                    <div className="nav-menu-container">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/faq">FAQ</Link>
                    <Link className="link" to="/sign-up">Sign up</Link>
                    <Link className="link" to="/log-in">Log in</Link>
                    </div>

            </nav>
        </>
    )
}

export default NavigationBar