import React, {useContext, useEffect} from 'react'
import {NavLink, useLocation} from "react-router-dom"
import './NavigationBar.css'
import {AuthContext} from "../context/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
function NavigationBar({links}) {

    const {isAuthenticated, logout} = useContext(AuthContext)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/logout') {
            logout()
        }
    }, [location, logout])

    return (
        <nav className="navigation-bar">
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink className="navigation-links" to={link.path}>{link.name}</NavLink>
                    </li>
                ))}
                {isAuthenticated && (
                    <li>
                        <NavLink className="navigation-links" to="/logout">Logout</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavigationBar