import axios from "axios"

async function getGameImage(username, gameID) {

    try {
        const response = await axios.get(`http://localhost:8080/users/${username}/games/${gameID}/download-game-photo`, {
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
            return []
        }
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error('An error occurred while fetching the game:', error)
        return []
    }

}

export default getGameImage