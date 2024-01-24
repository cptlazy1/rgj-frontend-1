import {instance} from "./axiosInstance"

async function getGameImage(username, gameID) {

    try {
        const response = await instance.get(`/users/${username}/games/${gameID}/download-game-photo`, {
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

    } catch (error) {
        console.error('An error occurred while fetching the game image:')
        return null
    }
}

export default getGameImage