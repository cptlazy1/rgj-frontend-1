import './Admin.css'
import Button from "../components/Button.jsx"
import {useNavigate} from "react-router-dom"

function Admin() {

    const navigate = useNavigate()
    const username = localStorage.getItem('username')


    return (
        <div className="admin">
            <h1>Admin</h1>
            <div className="admin-settings">

                <div className="admin">
                    <Button text="Change password" onClick={() => navigate(`/user-profile/${username}/password`)} />
                    <Button text="Users list" onClick={() => navigate("/admin/users")}/>

                </div>

            </div>
        </div>
    )
}

export default Admin