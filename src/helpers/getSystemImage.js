import axios from "axios"

async function getSystemImage(username, gameSystemID) {

    try {

        const response = await axios.get(`http://localhost:8080/users/${username}/game-systems/${gameSystemID}/download-game-system-photo`, {
            // server will be sending binary data
            responseType: "blob",
            'headers': {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return null
        }

        const blob = new Blob([response.data], {type: response.data.type})
        const imageURL = URL.createObjectURL(blob)

        console.log(response.data)
        return imageURL
    }
    catch (error) {
        console.error('An error occurred while fetching the system:', error)
        return null
    }
}

export default getSystemImage