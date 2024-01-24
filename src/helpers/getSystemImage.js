import {instance} from "./axiosInstance"

async function getSystemImage(username, gameSystemID) {

    try {
        const response = await instance.get(`/users/${username}/game-systems/${gameSystemID}/download-game-system-photo`, {
            // server will be sending binary data
            responseType: "blob",
            'headers': {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return null
        }

        return response.data
    }
    catch (error) {
        console.error('An error occurred while fetching the system photo:')
        return null
    }
}

export default getSystemImage