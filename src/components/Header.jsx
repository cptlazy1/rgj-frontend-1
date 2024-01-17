import {useContext, useEffect, useState} from 'react'
import logo from "../assets/RGJ logo.png"
import './Header.css'
import NavigationBar from "./NavigationBar.jsx";
import { AuthContext } from '../context/AuthContext.jsx'
import {useParams} from "react-router-dom";

function Header() {
    const {isAuthenticated, logout } = useContext(AuthContext)
    const [links, setLinks] = useState([])
    // const username = localStorage.getItem("username")
    const [username, setUsername] = useState(localStorage.getItem("username"))

    useEffect(() => {

        console.log("Use effect triggered")
        console.log(isAuthenticated)

        setUsername(localStorage.getItem("username"))
        console.log(username)
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