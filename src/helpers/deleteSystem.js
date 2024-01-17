import axios from "axios"

function deleteSystem(username, systemID) {
    return axios.delete(`http://localhost:8080/users/${username}/game-systems/${systemID}`, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

}

export default deleteSystem