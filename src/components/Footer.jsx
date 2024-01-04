import React from 'react';
import './Footer.css';
import {NavLink} from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="outer-footer-container">
            <button>
                &copy; {year}
            </button>
            <div >
                <ul className="footer-nav-links">
                    <li>
                        <NavLink className="footer-navigation-links" to="/home">Privacy policy</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-navigation-links" to="/faq">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-navigation-links" to="/sign-up">Contact</NavLink>
                    </li>

                </ul>
            </div>
            </div>
        </footer>
    );
}

export default Footer;