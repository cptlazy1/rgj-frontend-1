import './Login.css'

function Login() {
    return (
        <>

            <div className="login-container">
                <h1>Log in to your account</h1>
                <form className="login-form">
                    <label className="login-label">Username</label>
                    <input className="login-input" type="email" placeholder="Enter username"/>
                    <label className="login-label">Password</label>
                    <input className="login-input" type="password" placeholder="Enter password"/>
                    <button className="login-button">Log in</button>
                </form>
            </div>
        </>
    );
}

export default Login