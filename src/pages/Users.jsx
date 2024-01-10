import './Users.css'
import Button from "../components/Button.jsx";

function Users() {

    return (
        <div className="users">
            <h1>Users</h1>
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Is Admin</th>
                    <th>Delete user</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>User1</td>
                    <td>user@email.com</td>
                    <td>No</td>
                    <td>
                        <Button text="Delete"/>
                    </td>
                </tr>
                <tr>
                    <td>User2</td>
                    <td>two@gamil.com</td>
                    <td>No</td>
                    <td>
                        <Button text="Delete"/>
                    </td>
                </tr>

                    <tr>
                        <td>User3</td>
                        <td>slimshady@hotmail.com</td>
                        <td>Yes</td>
                        <td>
                            <Button text="Delete"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

)
}

export default Users