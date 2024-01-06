import React from 'react'
import {NavLink} from "react-router-dom"
import './NavigationBar.css'

// eslint-disable-next-line react/prop-types
function NavigationBar({links}) {
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
