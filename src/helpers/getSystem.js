import axios from "axios"

// Todo: this function needs to accept a game id and username as parameters
async function getSystem() {
    try {
        const response = await axios.get(`http://localhost:8080/users/porgy123/game-systems/1`, {
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
        console.error('An error occurred while fetching the system:', error)
        return []
    }
}

export default getSystem