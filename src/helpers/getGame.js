import axios from "axios"

// Todo: this function needs to accept a game id and username as parameters
async function getGame() {
    try {
        const response = await axios.get(`http://localhost:8080/users/porgy123/games/1`, {
            'Accept': 'application/json'
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