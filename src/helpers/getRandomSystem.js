import axios from "axios"

async function getRandomSystem(username) {
    try {
        const response = await axios.get(`http://localhost:8080/users/${username}/game-systems`, {
            'Accept': 'application/json',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!Array.isArray(response.data) || response.data.length === 0) {
            console.error('No data returned from server or no systems found!')
            return null
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * response.data.length);

        // Get the system at the random index
        return response.data[randomIndex];
    }
    catch (error) {
        console.error('An error occurred while fetching the system:', error)
        console.error('Error details:', error.response.data, error.response.status, error.response.headers)
        return null
    }
}

export default getRandomSystem