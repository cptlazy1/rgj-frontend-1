import './Users.css'
import Button from "../components/Button.jsx"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import getUsers from "../helpers/getUsers.js"
import truncateString from "../helpers/truncateString.js"
import deleteUser from "../helpers/deleteUser.js"

function Users() {


    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [page, setPage] = useState(0)
    const [rowsPerPage] = useState(15)
    const [loading, setLoading] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState('')
    const navigate = useNavigate()
    const username = localStorage.getItem('username')


    useEffect(() => {
        setLoading(true)
        const fetchUsers = async () => {
            try {
                const users = await getUsers()
                setUsers(users)
            } catch (error) {
                setError('An error occurred while fetching the users: ' + error.message)
            }
            setLoading(false)
        }

        void fetchUsers()
    }, [])

    useEffect(() => {
        const deleteMessage = localStorage.getItem('deleteMessage')
        if (deleteMessage) {
            setDeleteMessage(deleteMessage)
            localStorage.removeItem('deleteMessage')
        }
    }, [])

    const handleChangePage = (newPage) => {
        if (newPage < 0 || newPage * rowsPerPage >= users.length) {
            return
        }
        setPage(newPage)
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (loading) {
        return <div className="loading">Loading...</div>
    }

    const handleDeleteUser = async (username) => {
        try {
            await deleteUser(username)
            localStorage.setItem('deleteMessage', `User ${username} deleted successfully`)
            navigate("/admin/users")
            window.location.reload()

        } catch (error) {
            setError('An error occurred while deleting the user: ' + error.message)
        }
    }



    return (
        <>
            <div className="users">
                <h1>Users</h1>
                <div className="delete-message">
                {deleteMessage && <div className="delete-message">{deleteMessage}</div>}
                    <Button text="Profile" onClick={() => navigate(`/user-profile/${username}`)}/>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Delete user</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length > 0 ? (
                        users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                            <tr key={user.username}>
                                <td>{truncateString(user.username)}</td>
                                <td>{truncateString(user.email)}</td>

                                <td>
                                    <Button text="Delete" onClick={() => handleDeleteUser(user.username)}/>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No users found</td>
                        </tr>
                    )}


                    </tbody>
                </table>

                <div className="users-list-buttons">
                    <Button text="previous" onClick={() => handleChangePage(page - 1)} disabled={page === 0}/>
                    <label className="users-list-page-number">Page {page + 1}</label>
                    <Button text="next" onClick={() => handleChangePage(page + 1)}
                            disabled={(page + 1) * rowsPerPage >= users.length}/>
                </div>

            </div>


        </>
    )


}

export default Users