import React, {createContext, useState, useEffect} from "react"
import { useNavigate} from "react-router-dom"

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthContextProvider( {children} ) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null) // Define username and setUsername
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsAuthenticated(true)
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        const storedUsername = localStorage.getItem("username")
        if (storedUsername) {
            setUsername(storedUsername)
        }
    }, [])

    async function login(username, token) {
        localStorage.setItem("token", token)
        localStorage.setItem("username", username)
        setIsAuthenticated(true)
        navigate(`/user-profile/${username}`)
    }

    function logout() {
        setIsAuthenticated(false)
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        navigate("/")
    }

    const contextData = {
        isAuthenticated,
        login,
        logout,
        loading,
        setIsAuthenticated,
        username // Include username in contextData
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider