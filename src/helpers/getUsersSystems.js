import axios from "axios"

async function getUsersSystems() {
    try {
        const response = await axios.get('http://localhost:8080/users/porgy123/game-systems', {
            'Accept': 'application/json'
        })

        if (!response.data) {
            console.error('No data returned from server!')
            return []
        }
        return response.data;

    } catch (error) {
        console.error('An error occurred while fetching the systems:', error)
        return []
    }
}

export default getUsersSystems