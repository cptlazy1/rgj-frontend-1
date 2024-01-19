// import './Password.css'
// import Button from "../components/Button.jsx";
//
// function Password() {
//     return (
//         <div className="password">
//             <h1>Change password</h1>
//             <div className="password-settings">
//                 <p>Old password</p>
//                 <input type="password"/>
//                 <p>New password</p>
//                 <input type="password"/>
//                 <p>Confirm new password</p>
//                 <input type="password"/>
//
//
//             </div>
//             <div className="change-password">
//                 <Button text="Change password"/>
//             </div>
//         </div>
//     );
// }
//
// export default Password

import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Password.css'
import Button from "../components/Button.jsx";
import { AuthContext } from '../context/AuthContext';

function Password() {
    const { username } = useContext(AuthContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = async () => {
        if (newPassword !== confirmNewPassword) {
            alert("New passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`/users/${username}/change-password`, {
                oldPassword,
                newPassword
            });

            alert(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to change password");
        }
    };

    return (
        <div className="password">
            <h1>Change password</h1>
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
        </div>
    );
}

export default Password;
