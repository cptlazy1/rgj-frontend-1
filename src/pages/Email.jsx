import './Email.css'
import Button from "../components/Button.jsx"
import {useState} from "react"
import changeEmail from "../helpers/changeEmail.js"

function Email() {

    const username = localStorage.getItem('username')
    const [newEmail, setNewEmail] = useState('')
    const [confirmNewEmail, setConfirmNewEmail] = useState('')
    const [message, setMessage] = useState('')

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return regex.test(String(email).toLowerCase())
    }

    async function handleChangeEmail(event) {
        event.preventDefault()

        if (newEmail.length < 1) {
            setMessage("Email is required")
        } else if (!validateEmail(newEmail)) {
            setMessage("Email is invalid")
        } else if (newEmail !== confirmNewEmail) {
            setMessage("Emails don't match")
        } else {
            try {
                await changeEmail(username, newEmail)
                setMessage('Email changed successfully')
            } catch (error) {
                setMessage('Please enter a correct e-mail address' + error)
            }
        }
    }

    return (
        <div className="email">
            <h1>Change email</h1>
            <form className="email-form" onSubmit={handleChangeEmail}>
                <div className="email-settings">
                    <p>New email</p>
                    <input type="email" value={newEmail} onChange={event => setNewEmail(event.target.value)}/>
                    <p>Confirm email</p>
                    <input type="email" value={confirmNewEmail}
                           onChange={event => setConfirmNewEmail(event.target.value)}/>
                </div>
                <div className="change-email">
                    <Button text="Change email" onClick={handleChangeEmail}/>
                </div>
            </form>

            {message && <div className="message">{message}</div>}
        </div>
    )
}

export default Email