import React from 'react';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <button>
                &copy; {year}
            </button>
        </footer>
    );
}

export default Footer;