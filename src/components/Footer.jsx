import React from 'react';
import './Footer.css';
import {NavLink} from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="inner-footer-container">
            <button>
                &copy; {year}
            </button>
            <div >
                <ul className="footer-nav-links-container">
                    <li>
                        <NavLink className="footer-nav-links" to="/privacy-policy">Privacy policy</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-nav-links" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-nav-links" to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </div>
            </div>
        </footer>
    );
}

export default Footer;