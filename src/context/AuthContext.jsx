import React, {createContext, useEffect, useState} from "react"
import { useNavigate} from "react-router-dom"
import {jwtDecode} from "jwt-decode"
import axios from "axios"


export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthContextProvider( {children} ) {
    const [isAuthenticated, setIsAuthenticated] = useState({
        isAuthenticated: false,
        username: ""
    })

    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     if (token) {
    //         // setIsAuthenticated({
    //         //     isAuthenticated: true,
    //         //     username: token
    //         // })
    //         void login(token)
    //     }
    //     else {
    //         setIsAuthenticated({
    //             isAuthenticated: false,
    //             username: "",
    //             status: "done"
    //
    //         })
    //     }
    // }, [])


    const navigate = useNavigate()

    async function login(username, token) {

        localStorage.setItem("token", token)

        console.log("User: " + username + " logged in")
        setIsAuthenticated({
            isAuthenticated: true,
            username: username,
            token: token
        })
        navigate("/user-profile/" + username)
    }


    function logout() {
        console.log("User logged out")
        setIsAuthenticated({
            isAuthenticated: false,
            username: null
        })
        navigate("/")
    }

    const contextData = {
        isAuthenticated: isAuthenticated.isAuthenticated,
        username: isAuthenticated.username,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {/*{isAuthenticated.status === "done" ? children : <p>Loading...</p>}*/}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider