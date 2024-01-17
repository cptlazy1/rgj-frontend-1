import React, {useContext, useEffect} from 'react'
import {NavLink, useLocation} from "react-router-dom"
import './NavigationBar.css'
import {AuthContext} from "../context/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
function NavigationBar() {

    const {logout, authStatus} = useContext(AuthContext)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/logout') {
            logout()
        }
    }, [location, logout])

    const links = authStatus
        ? [
            {name: "Home", path: "/"},
            {name: "FAQ", path: "/faq"},
            {name: "Logout", path: "/logout"},
        ]
        : [
            {name: "Home", path: "/"},
            {name: "FAQ", path: "/faq"},
            {name: "Sign up", path: "/sign-up"},
            {name: "Log in", path: "/log-in"},
        ];

    return (
        <nav className="navigation-bar">
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink className="navigation-links" to={link.path}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationBar