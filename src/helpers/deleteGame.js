import axios from "axios"

function deleteGame(username, gameID) {
    return axios.delete(`http://localhost:8080/users/${username}/games/${gameID}`, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export default deleteGame