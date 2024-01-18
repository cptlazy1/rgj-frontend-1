import axios from "axios"

async function getSystemImage(username, gameSystemID) {

    try {
        const response = await axios.get(`http://localhost:8080/users/${username}/game-systems/${gameSystemID}/download-game-system-photo`, {
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

        const blob = new Blob([response.data], {type: response.data.type})
        return URL.createObjectURL(blob)
    }
    catch (error) {
        console.error('An error occurred while fetching the system:', error)
        return null
    }
}

export default getSystemImage