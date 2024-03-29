import { instance } from './axiosInstance.js'

async function deleteGame(username, gameID) {
    return await instance.delete(`/users/${username}/games/${gameID}`, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export default deleteGame