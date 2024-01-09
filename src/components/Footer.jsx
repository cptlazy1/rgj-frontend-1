<<<<<<< HEAD
import React from 'react';
import './Footer.css';

=======
import React from 'react'
import './Footer.css'
import NavigationBar from "./NavigationBar.jsx"
>>>>>>> responsive

function Footer() {

    const year = new Date().getFullYear();

    const links = [
        {name: "Privacy policy", path: "/privacy-policy"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"}
    ]

    return (
        <footer>
<<<<<<< HEAD
            <div className="outer-footer-container">
            <button>
                &copy; {year}
            </button>

=======
            <div className="inner-footer-container">
                <button>
                    &copy; {year}
                </button>
                <div>
                    <NavigationBar links={links}/>
                </div>
>>>>>>> responsive
            </div>
        </footer>
    );
}

export default Footer