import './Signup.css'
import Button from "../components/Button.jsx"
import {useContext, useState} from "react"
import signup from "../helpers/signup.js"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {AuthContext} from "../context/AuthContext.jsx"


function Signup() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const {setIsAuthenticated} = useContext(AuthContext)


    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return regex.test(String(email).toLowerCase())
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Passwords don't match")
        } else if (username.length < 8 || username.length > 20) {
            setMessage("Username must be between 8 and 20 characters")
        } else if (email.length < 1) {
            setMessage("Email is required")
        } else if (!validateEmail(email)) {
            setMessage("Email is invalid")
        } else if (password.length < 1) {
            setMessage("Password is required")
        } else {
            // Alternative method to the try catch block in Login.jsx:
            signup(username, password, email)
                .then(response => {
                    setMessage(response)
                    localStorage.setItem("token", response.jwToken)
                    localStorage.setItem("newUser", "true")
                    setIsAuthenticated(true)
                    navigate(`/user-profile/${username}`)
                })
                .catch(error => {
                    if (axios.isAxiosError(error) && error.response) {
                        console.error(error.response.data)
                        const errorMessages = Object.values(error.response.data).join('')
                        setMessage(errorMessages)
                    } else {
                        console.error(error)
                        setMessage("Error signing up: " + error)
                    }
                })
        }
    }

    return (
        <>

            <div className="signup-container">
                <h1>Create your free account</h1>
                <form className="signup-form" onSubmit={handleSubmit}>

                    <label className="signup-label" htmlFor="username-field">Username</label>
                    <input
                        id="username-field"
                        className="signup-input"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <label className="signup-label" htmlFor="email-field">Email</label>
                    <input
                        id="email-field"
                        className="signup-input"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label className="signup-label" htmlFor="password-field">Password</label>
                    <input
                        id="password-field"
                        className="signup-input"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <label className="signup-label" htmlFor="confirm-password-field">Confirm password</label>
                    <input
                        id="confirm-password-field"
                        className="signup-input"
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />

                    <Button text="Sign up" onClick={handleSubmit}/>

                </form>

                <div className="message">
                    {/*{message &&*/}
                    {/*    <p>{typeof message === 'object' ? message.message : message.split('\n').map((item, key) => {*/}
                    {/*        return <span key={key}>{item}<br/></span>*/}
                    {/*    })}</p>}*/}

                    {message && <p>{message}</p>}
                </div>

            </div>
        </>
    )
}

export default Signup