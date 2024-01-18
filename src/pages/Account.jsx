import './Account.css'
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function Account() {

    const navigate = useNavigate()
    const username = localStorage.getItem('username')

    return (
        <div className="account">
            <h1>Account settings</h1>
            <div className="settings">
                <Button text="Change password" onClick={() => navigate(`/user-profile/${username}/password`)} />
                <Button text="Change email" onClick={() => navigate(`/user-profile/${username}/email`)}/>
            </div>
        </div>
    );
}

export default Account