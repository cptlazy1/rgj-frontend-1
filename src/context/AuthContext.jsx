import React, {createContext, useState} from "react"
import { useNavigate} from "react-router-dom"


export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthContextProvider( {children} ) {
    const [isAuthenticated, setIsAuthenticated] = useState({
        isAuthenticated: false,
        username: ""
    })
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
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider