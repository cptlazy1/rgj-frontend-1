import React from 'react'
import logo from "../assets/RGJ logo.png"
import './Header.css'
import NavigationBar from "./NavigationBar.jsx";

function Header() {


    return (
        <>
            <header >

                <div className="outer-header-container">
                <div>
                    <img src={logo} alt="logo"/>
                </div>

                <div className="nav-links-container">
                    <NavigationBar/>
                </div>
                </div>
            </header>

        </>
    );
}

export default Header