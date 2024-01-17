import {NavLink} from "react-router-dom"
import './NavigationBar.css'
import PropTypes from "prop-types";

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

NavigationBar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
        })
    ).isRequired,
    logout: PropTypes.func.isRequired
}
export default NavigationBar