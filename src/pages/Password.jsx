import './Password.css'
import Button from "../components/Button.jsx";

function Password() {
    return (
        <div className="password">
            <h1>Change password</h1>
            <div className="password-settings">
                <p>Old password</p>
                <input type="password" />
                <p>New password</p>
                <input type="password" />
                <p>Confirm new password</p>
                <input type="password" />

                <div className="change-password">
                <Button text="Change password" />
                </div>

            </div>
        </div>
    );
}

export default Password