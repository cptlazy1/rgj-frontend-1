import axios from "axios";

async function getUsersGames() {

    try {
        const response = await axios.get('http://localhost:8080/users/porgy123/games', {
            'Accept': 'application/json'
        })
        // console.log(response.data)
        if (!response.data) {
            throw new Error('No data returned from server!')
        }
        return response.data;
    }
    catch (error) {
        console.error('An error occurred while fetching the games:', error)
        return []
    }

}

export default getUsersGames