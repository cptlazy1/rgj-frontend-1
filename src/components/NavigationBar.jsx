import React from 'react'
import {NavLink} from "react-router-dom"
import './NavigationBar.css'

function NavigationBar() {


    return (
        <>
            <nav className="navigation-bar">
                <ul>
                    <li>
                        <NavLink className="navigation-links" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-links" to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-links" to="/sign-up">Sign up</NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-links" to="/log-in">Log in</NavLink>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default NavigationBar