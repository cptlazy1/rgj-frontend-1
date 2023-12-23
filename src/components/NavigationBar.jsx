import React from 'react'
import {useNavigate, NavLink} from "react-router-dom"
import logo from '../assets/RGJ logo.png'
import './NavigationBar.css'

function NavigationBar() {


    return (
        <>


            <nav >
                <div className="navigation-bar">
                    <ul>
                        <li>
                            <NavLink className="navigation-links" to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links" to="/faq">FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links" to="/sign-up">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links"  to="/log-in">Log in</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar