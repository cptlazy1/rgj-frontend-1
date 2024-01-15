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
            return []
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * response.data.length);

        console.log(randomIndex)
        // Get the system at the random index
        const randomSystem = response.data[randomIndex];

        console.log(randomSystem)
        return randomSystem;
    }
    catch (error) {
        console.error('An error occurred while fetching the system:', error)
        return []
    }
}

export default getRandomSystem