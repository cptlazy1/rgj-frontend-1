import { instance } from './axiosInstance.js'

async function addSystem(username, system) {
    const response = await instance.post(`/users/${username}/game-systems`, system, {
        'Accept': 'application/json',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }

    })
    return response.data;

}

export default addSystem