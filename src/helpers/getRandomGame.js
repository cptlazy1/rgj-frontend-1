import axios from "axios"

async function getRandomGame(username) {
    try {
        const response = await axios.get(`http://localhost:8080/users/${username}/games`, {
            'Accept': 'application/json',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (!Array.isArray(response.data) || response.data.length === 0) {
            console.error('No data returned from server or no games found!')
            return []
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * response.data.length);

        // Get the game at the random index
        const randomGame = response.data[randomIndex];

        console.log(randomGame)
        return randomGame;
    }
    catch (error) {
        console.error('An error occurred while fetching the game:', error)
        return []
    }
}

export default getRandomGame