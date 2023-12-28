import React from 'react';
import './Footer.css';


function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="outer-footer-container">
            <button>
                &copy; {year}
            </button>

            </div>
        </footer>
    );
}

export default Footer;