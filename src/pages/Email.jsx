import './Email.css'
import Button from "../components/Button.jsx";

function Email() {
    return (
        <div className="email">
            <h1>Change email</h1>
            <div className="email-settings">
                <p>Old email</p>
                <input type="email"/>
                <p>New email</p>
                <input type="email"/>
                <p>Confirm new email</p>
                <input type="email"/>


            </div>
            <div className="change-email">
                <Button text="Change email"/>
            </div>
        </div>
    );
}

export default Email