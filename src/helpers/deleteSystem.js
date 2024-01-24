import { instance } from './axiosInstance.js'

async function deleteSystem(username, systemID) {
    return await instance.delete(`/users/${username}/game-systems/${systemID}`, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export default deleteSystem