import axios from "axios"

async function getSystem(username, gameSystemId) {
    try {
        const response = await axios.get(`http://localhost:8080/users/${username}/game-systems/${gameSystemId}`, {
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
        return response.data;
    }
    catch (error) {
        console.error('An error occurred while fetching the system:', error)
        return []
    }
}

export default getSystem