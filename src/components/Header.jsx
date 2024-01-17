import React, { useContext, useEffect } from 'react'
import logo from "../assets/RGJ logo.png"
import './Header.css'
import NavigationBar from "./NavigationBar.jsx";
import { AuthContext } from '../context/AuthContext.jsx'

function Header() {

    const { isAuthenticated, logout } = useContext(AuthContext)

    const [links, setLinks] = React.useState([]);

    useEffect(() => {
        setLinks(isAuthenticated
            ? [
                {name: "Home", path: "/"},
                {name: "FAQ", path: "/faq"},

            ]
            : [
                {name: "Home", path: "/"},
                {name: "FAQ", path: "/faq"},
                {name: "Sign up", path: "/sign-up"},
                {name: "Log in", path: "/log-in"},
            ]);
    }, [isAuthenticated, logout]);



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