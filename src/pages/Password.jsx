import React, { useState, useContext } from 'react'
import axios from 'axios'
import './Password.css'
import Button from "../components/Button.jsx"
import { AuthContext } from '../context/AuthContext'
import changePassword from "../helpers/changePassword.js"


function Password() {
    const { username } = useContext(AuthContext)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [message, setMessage] = useState('')

    async function handleChangePassword(event) {
        event.preventDefault()

        if (newPassword !== confirmNewPassword) {
            setMessage("Passwords don't match")
        } else {
            try {
                await changePassword(username, oldPassword, newPassword)
                setMessage('Password changed successfully')
            } catch (error) {
                setMessage('An error occurred while changing the password: ' + error.message)
            }
        }
    }

    return (
        <div className="password">
            <h1>Change password</h1>
            <form className="password-form" onSubmit={handleChangePassword}>
            <div className="password-settings">
                <p>Old password</p>
                <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                <p>New password</p>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                <p>Confirm new password</p>
                <input type="password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            </div>
            <div className="change-password">
                <Button text="Change password" onClick={handleChangePassword} />
            </div>
            </form>

            {message && <div className="message">{message}</div>}
        </div>
    );
}

export default Password;
