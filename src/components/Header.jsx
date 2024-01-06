import React from 'react'
import logo from "../assets/RGJ logo.png"
import './Header.css'
import NavigationBar from "./NavigationBar.jsx";

function Header() {

    const links = [
        {name: "Home", path: "/"},
        {name: "FAQ", path: "/faq"},
        {name: "Sign up", path: "/sign-up"},
        {name: "Log in", path: "/log-in"},
    ]


    return (
        <>
            <header>
                <div className="inner-header-container">
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>

                    <div>
                        <NavigationBar links={links}/>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header