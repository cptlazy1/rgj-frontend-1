import './Email.css'

function Email() {
    return (
        <div className="email">
            <h1>Change email</h1>
            <div className="email-settings">
                <p>Old email</p>
                <input type="email" />
                <p>New email</p>
                <input type="email" />
                <p>Confirm new email</p>
                <input type="email" />

                <div className="change-email">
                <button>Change email</button>
                </div>

            </div>
        </div>
    );
}

export default Email