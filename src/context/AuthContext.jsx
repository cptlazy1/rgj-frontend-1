import React, {createContext, useState} from "react"
import { useNavigate} from "react-router-dom"

export const AuthContext = createContext({})

function AuthContextProvider(children) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    function login() {
        console.log("User logged in")
        setIsAuthenticated(true)
        navigate("/user-profile/profile")
    }

    function logout() {
        console.log("User logged out")
        setIsAuthenticated(false)
        navigate("/")
    }

    const contextData = {
        isAuthenticated: isAuthenticated,
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