import './Email.css'
import Button from "../components/Button.jsx";
import {AuthContext} from "../context/AuthContext.jsx";
import {useContext, useState} from "react";
import changeEmail from "../helpers/changeEmail.js";

function Email() {

    const { username } = useContext(AuthContext)
    const [newEmail, setNewEmail] = useState('')
    const [confirmNewEmail, setConfirmNewEmail] = useState('')
    const [message, setMessage] = useState('')

    async function handleChangeEmail(event) {
        event.preventDefault()

        try {
            await changeEmail(username, newEmail)
            setMessage('Email changed successfully')
        } catch (error) {
            setMessage('An error occurred while changing the email: ' + error.message)
        }
    }

    return (
        <div className="email">
            <h1>Change email</h1>
            <form className="email-form" onSubmit={handleChangeEmail}>
            <div className="email-settings">
                <p>New email</p>
                <input type="email" value={newEmail} onChange={event => setNewEmail(event.target.value)}/>
                <p>Confirm new email</p>
                <input type="email" value={confirmNewEmail} onChange={event => setConfirmNewEmail(event.target.value) }/>


            </div>
            <div className="change-email">
                <Button text="Change email" onClick={handleChangeEmail}/>
            </div>
            </form>

            {message && <div className="message">{message}</div>}
        </div>
    );
}

export default Email