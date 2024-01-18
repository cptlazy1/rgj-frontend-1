import {NavLink} from "react-router-dom"
import './NavigationBar.css'

// eslint-disable-next-line react/prop-types
function NavigationBar({links, logout}) {
    return (
        <nav className="navigation-bar">
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            className="navigation-links"
                            to={link.path}
                            onClick={link.name === "Log out" ? logout : null}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationBar