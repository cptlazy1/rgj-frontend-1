import './Signup.css'
import Button from "../components/Button.jsx"
import {useState} from "react"
import signup from "../helpers/signup.js"
import axios from "axios";

function Signup() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(event) {

        event.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Passwords don't match")

        } else {
            try {
                const response = await signup(username, password, email)
                setMessage(response)
            } catch (error) {
                if (axios.isAxiosError(error) && error.response.status === 400) {
                    console.error(error.response.data)
                    setMessage(
                        error.response.data.email ||
                        error.response.data.username ||
                        error.response.data.password ||
                        error.response.data)
                } else {
                    console.error(error)
                    setMessage("Error signing up")
                }
            }
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
                    {message && <p>{typeof message === 'object' ? message.message : message}</p>}
                </div>

            </div>
        </>
    );
}

export default Signup