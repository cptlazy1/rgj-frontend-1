import axios from "axios";

// Todo: this function needs to accept a username as parameter
async function getUsersGames() {
    try {
        const response = await axios.get('http://localhost:8080/users/porgy123/games', {
            'Accept': 'application/json'
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }
        return response.data;
    }
    catch (error) {
        console.error('An error occurred while fetching the games:', error)
        return []
    }
}

export default getUsersGames