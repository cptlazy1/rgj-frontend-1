import {instance} from "./axiosInstance.js"

async function getUsersSystems(username) {
    try {
        const response = await instance.get(`/users/${username}/game-systems`, {
            'Accept': 'application/json',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }
        return response.data;

    } catch (error) {
        console.error('An error occurred while fetching the systems:', error)
        return []
    }
}

export default getUsersSystems