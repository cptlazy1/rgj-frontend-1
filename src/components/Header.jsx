import {useContext, useEffect, useState} from 'react'
import logo from "../assets/RGJ logo.png"
import './Header.css'
import NavigationBar from "./NavigationBar.jsx";
import { AuthContext } from '../context/AuthContext.jsx'


function Header() {
    const {isAuthenticated, logout } = useContext(AuthContext)
    const [links, setLinks] = useState([])
    const [username, setUsername] = useState(localStorage.getItem("username"))

    useEffect(() => {

        setUsername(localStorage.getItem("username"))
        setLinks(isAuthenticated
            ? [
                {name: "Home", path: "/"},
                {name: "FAQ", path: "/faq"},
                {name: username, path: "/user-profile/" + username},
                {name: "Log out", path: "/"},

            ]
            : [
                {name: "Home", path: "/"},
                {name: "FAQ", path: "/faq"},
                {name: "Sign up", path: "/sign-up"},
                {name: "Log in", path: "/log-in"},
            ]);
    }, [isAuthenticated, logout, username]);


    return (
        <>
            <header>
                <div className="inner-header-container">
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>

                    <div>
                        <NavigationBar links={links} logout={logout} key={isAuthenticated}/>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header