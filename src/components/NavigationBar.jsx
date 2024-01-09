import {NavLink} from "react-router-dom"
import './NavigationBar.css'

// eslint-disable-next-line react/prop-types
function NavigationBar({links}) {
    return (
<<<<<<< HEAD
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
                            <NavLink className="navigation-links" to="/faq">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links" to="/faq">Privacy policy</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links" to="/faq">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links" to="/sign-up">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink className="navigation-links" to="/sign-up">Log in</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
=======
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
>>>>>>> responsive
    )
}

export default NavigationBar
