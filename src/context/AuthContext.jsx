import {createContext, useState, useEffect} from "react"
import { useNavigate} from "react-router-dom"

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthContextProvider( {children} ) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState("")
    const [role, setRole] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const tokenTime = localStorage.getItem("tokenTime")
        if (token && tokenTime) {
            const currentTime = new Date()
            const timeDifference = currentTime - new Date(tokenTime)
            const timeDifferenceInMinutes = timeDifference / 1000 / 60

            if (timeDifferenceInMinutes >= 2) { // 2 minutes
                setIsAuthenticated(false)
                localStorage.removeItem("token")
                localStorage.removeItem("tokenTime")
                navigate("/log-in") // Redirect to login page
            } else {
                setIsAuthenticated(true)
            }
        }
        setLoading(false)
    }, [navigate])
    
    useEffect(() => {
        const storedUsername = localStorage.getItem("username")
        const storedRole = localStorage.getItem("role")
        if (storedUsername) {
            setUsername(storedUsername)
        }
        if (storedRole) {
            setRole(storedRole)
        }
    }, [])

    async function login(username, token, role) {
        localStorage.setItem("token", token)
        localStorage.setItem("username", username)
        localStorage.setItem("role", role)
        localStorage.setItem("tokenTime", new Date().getTime().toString())
        setIsAuthenticated(true)
        setRole(role)
        navigate(`/user-profile/${username}`)
    }

    function logout() {
        setIsAuthenticated(false)
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("role")
        localStorage.removeItem("tokenTime")
        navigate("/")
    }

    const contextData = {
        isAuthenticated,
        login,
        logout,
        loading,
        setIsAuthenticated,
        username,
        role
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider