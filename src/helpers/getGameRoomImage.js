import {instance} from "./axiosInstance"

async function getGameRoomImage(username) {

    try {
        const response = await instance.get(`/users/${username}/download-grp`, {
            // server will be sending binary data
            responseType: "blob",
            'headers': {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }

        return response.data

    } catch (error) {
        console.error('An error occurred while fetching the game room image:')
        return []
    }
}

export default getGameRoomImage