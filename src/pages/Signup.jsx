import './Signup.css'
import Button from "../components/Button.jsx";

function Signup() {
    return (
        <>

            <div className="signup-container">
                <h1>Create your free account</h1>
                <form className="signup-form">

                    <label className="signup-label">Username</label>
                    <input className="signup-input" type="text" placeholder="Enter username"/>

                    <label className="signup-label">Email</label>
                    <input className="signup-input" type="email" placeholder="Enter email"/>

                    <label className="signup-label">Password</label>
                    <input className="signup-input" type="password" placeholder="Enter password"/>

                    <label className="signup-label">Confirm password</label>
                    <input className="signup-input" type="password" placeholder="Confirm password"/>

                    <Button text="Sign up" onClick={() => console.log("Sign up button clicked. Really!!")}/>

                </form>
            </div>
        </>
    );
}

export default Signup