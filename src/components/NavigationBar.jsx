import {NavLink} from "react-router-dom"
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
    )
}

export default NavigationBar