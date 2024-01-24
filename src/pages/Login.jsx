import './Login.css'
import Button from "../components/Button.jsx"
import {AuthContext} from "../context/AuthContext.jsx"
import {useContext, useState} from "react"
import axios from "axios"



function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const {login} = useContext(AuthContext)



    async function handleSubmit(event) {
        event.preventDefault()

        if (username.length < 1) {
            setMessage("Username is required")
            return
        }

        if (password.length < 1) {
            setMessage("Password is required")
            return
        }

        try {
            const response = await axios.post(`http://localhost:8080/authentication/login`, {
                username: username,
                password: password
            })

            const { jwToken, role } = response.data
            login(username, jwToken, role)

        } catch (error) {
            setMessage("Username or password incorrect.")
        }

    }


    return (
        <>

            <div className="login-container">
                <h1>Log in to your account</h1>
                <form className="login-form">

                    <label className="login-label" htmlFor="username-field">Username</label>
                    <input
                        id="username-field"
                        type="text"
                        value={username}
                        className="login-input"
                        placeholder="Enter username"
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <label className="login-label" htmlFor="password-field">Password</label>
                    <input
                        id="password-field"
                        type="password"
                        value={password}
                        className="login-input"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <Button text="Log in" onClick={handleSubmit}/>


                </form>
            </div>


            {message && <div className="message">{message}</div>}

        </>
    )
}

export default Login