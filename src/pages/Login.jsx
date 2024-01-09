import './Login.css'
import Button from "../components/Button.jsx"
import { useNavigate} from "react-router-dom";



function Login() {

    const navigate = useNavigate();

    return (
        <>

            <div className="login-container">
                <h1>Log in to your account</h1>
                <form className="login-form">

                    <label className="login-label">Username</label>
                    <input className="login-input" type="email" placeholder="Enter username"/>
                    <label className="login-label">Password</label>
                    <input className="login-input" type="password" placeholder="Enter password"/>


                    <Button text="Log in" onClick={() => navigate('/user-profile')}/>

                </form>
            </div>
        </>
    )
}

export default Login