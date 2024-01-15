import axios from "axios"

async function getGame(username, gameID) {
    try {
        const response = await axios.get(`http://localhost:8080/users/${username}/games/${gameID}`, {
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
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error('An error occurred while fetching the game:', error)
        return []
    }
}

export default getGame