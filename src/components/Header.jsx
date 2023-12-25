import React from 'react'
import logo from "../assets/RGJ logo.png"
import './Header.css'
import NavigationBar from "./NavigationBar.jsx";

function Header() {


    return (
        <>
            <header className="outer-header-container">

                <div>
                    <img src={logo} alt="logo"/>
                </div>

                <div className="inner-header-container">
                    <NavigationBar/>
                </div>

            </header>

        </>
    );
}

export default Header